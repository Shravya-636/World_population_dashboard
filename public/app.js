document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/population')
        .then(response => response.json())
        .then(data => {
            createBarChart(data);
            createLineChart(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function createBarChart(data) {
    const ctx = document.getElementById('populationBarChart').getContext('2d');

    const latestData = data.data.filter(row => row.year === '2020');
    const labels = latestData.map(row => row.continent);
    const populationData = latestData.map(row => row.population_millions);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Population in 2020 (in millions)',
                data: populationData,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createLineChart(data) {
    const ctx = document.getElementById('populationLineChart').getContext('2d');

    const asiaData = data.data.filter(row => row.continent === 'Asia');
    const years = asiaData.map(row => row.year);
    const populationData = asiaData.map(row => row.population_millions);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'Asia Population Growth (in millions)',
                data: populationData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}