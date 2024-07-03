document.addEventListener("DOMContentLoaded", function() {
        fetch('fetch_testimonials.php')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('testimonials-container');
                data.forEach(testimonial => {
                    const testimonialsDiv = document.createElement('div');
                    testimonialsDiv.classList.add('testimonials');
                    
                    const name = document.createElement('h3');
                    name.textContent = testimonials.name;
                    
                    const content = document.createElement('p');
                    content.textContent = testimonials.content;
                    
                    const date = document.createElement('small');
                    date.textContent = `Date: ${testimonials.date}`;
                    
                    testimonialsDiv.appendChild(name);
                    testimonialsDiv.appendChild(content);
                    testimonialsDiv.appendChild(date);
                    
                    container.appendChild(testimonialsDiv);
                });
            })
            .catch(error => console.error('Error fetching testimonials:', error));
    });
