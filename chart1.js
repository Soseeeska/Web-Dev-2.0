
const chart1 = document.getElementById('myChart1');
new Chart(chart1, {
  type: 'line',
  data: {
    labels: ['March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [{
      label: '# of Downloads',
      data: [20, 25, 46, 31, 56, 12],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: 'rgba(75, 192, 192, 0.2)',  
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(153, 102, 255, 0.2)',  
        }
      }
    },
  },
});
