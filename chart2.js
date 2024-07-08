const chart2 = document.getElementById('myChart2');
    
    new Chart(chart2, {
      type: 'line',
      data: {
        labels: ['March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [{
          label: '# of Downloads',
          data: [3, 13, 24, 56, 52, 67],
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