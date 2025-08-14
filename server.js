const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const PORT = 3000;

app.use(express.static('public')); // This serves your index.html and other frontend files

// API endpoint to get the population data
app.get('/api/population', (req, res) => {
    const results = [];
    const stream = fs.createReadStream('population_data.csv');

    stream.on('error', (err) => {
        console.error('CSV file read error:', err);
        return res.status(500).json({ error: 'Could not read CSV file' });
    });

    stream
      .pipe(csv())
      .on('error', (err) => {
        console.error('CSV parsing error:', err);
        return res.status(500).json({ error: 'Error parsing CSV' });
      })
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log('CSV data read successfully'); // DEBUG LOG
        const years = [...new Set(results.map(row => row.year))];
        const continents = [...new Set(results.map(row => row.continent))];

        const responseData = {
          years: years,
          continents: continents,
          data: results
        };

        res.json(responseData);
      });
});


app.listen(4000, () => {
    console.log(`Server is running on http://localhost:4000`);
});