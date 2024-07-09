
// Select the element where the chart will appear 
const chart3 = document.getElementById('myChart3');
    // Create a new Chart instance
    new Chart(chart3, {
      //  type of chart
      type: 'line',
      // Define the data for the chart
      data: {
        // Labels for the x-axis
        labels: ['March', 'April', 'May', 'June', 'July', 'August'],
        // Datasets array containing one or more  objects
        datasets: [{
          // The label for the dataset, displayed on top 
          label: '# of Downloads',
          // Data points for the dataset, corresponding to the labels
          data: [34, 33, 12, 31, 87, 12],
          // Width of the coordinate line 
          borderWidth: 1
        }]
      },
      // Configuration for the chart
      options: {
        // Makes the chart responsive
        responsive: true,
        // Configuration for the axes of the chart
        scales: {
          // Configuration for the x-axis
              x: {
                // Configuration for the grid on the x-axis
                grid: {
                  // Color of the grid on the x-axis
                  color: 'rgba(75, 192, 192, 0.2)',  
                }
              },
              // Configuration for the y-axis
              y: {
                // Start the y-axis at zero
                beginAtZero: true,
                // Configuration for the grid  on the y-axis
                grid: {
                  // Color of the grid on the y-axis
                  color: 'rgba(153, 102, 255, 0.2)',  
                }
              }
            },
          },
        });