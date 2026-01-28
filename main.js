const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Monthly Renewble Energy Production (MWh)',
            data: [1200, 1900, 3000, 5000, 2300, 3400],
            backgroundColor: [
                '#388E3C',
                '#4CAF50',
                '#66BB6A',
                '#81C784',
                '#AED581',
                '#DCE775'
            ],
            borderWidth: 1
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
});

const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Monthly Recycling Energy Consumption (MWh)',
            data: [1500, 1700, 2500, 4000, 3000, 4500],
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true,
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
});

const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Solar', 'Wind', 'Hydro', 'Geothermal', 'Biomass'],
        datasets: [{
            data: [35,30, 25,10],
            backgroundColor: [ '#4CAF50', '#81C784', '#388E3C', '#A5D6A7', '#C8E6C9'],
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        }
    }
});

const modal = document.getElementById('infoModal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.getElementsByClassName('close');

document.querySelectorAll('.info-btn').forEach(button => {
    button.addEventListener('click', () => {
        const chart = button.getAttribute('data-chart');
        const infoDiv = document.getElementById( chart + '-info');
        modalBody.innerHTML = infoDiv.innerHTML;
        modal.style.display = 'block';
    });
});
closeBtn.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};