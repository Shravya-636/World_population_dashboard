# Weather Dashboard

A simple Node.js and Express project that visualizes world population data using charts.

## Features

- Displays population data by continent for the latest year (bar chart)
- Shows population growth over the years for Asia (line chart)
- Uses **Chart.js** for charts and **CSV data** as the source
- Static frontend served from `public/` folder

## Project Structure

Weather/
├─ server.js
├─ population_data.csv
├─ package.json
├─ package-lock.json
├─ .gitignore
└─ public/
├─ index.html
├─ app.js
└─ style.css


## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/YourUsername/WeatherDashboard.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node server.js
```


4. Open your browser and go to:

```bash
http://localhost:3000
````



Make sure population_data.csv is in the project root

node_modules/ is excluded from the repository. Run npm install to install dependencies
