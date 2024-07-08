const chart3 = document.getElementById('myChart3');
    
    new Chart(chart3, {
      type: 'line',
      data: {
        labels: ['March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [{
          label: '# of Downloads',
          data: [34, 33, 12, 31, 87, 12],
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