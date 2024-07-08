document.addEventListener("DOMContentLoaded", function() {
        fetch('http://localhost/devsitev2.0/fetch_testimonials.php')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('testimonial-container');
                data.forEach(testimonial => {
                    const testimonialItem = document.createElement('div');
                    testimonialItem.classList.add('testimonialItem');
    
                    const img = document.createElement('img');
                    img.src = testimonial.image;
                    img.alt = 'Client Photo';
                    img.classList.add('circular-image');
                    testimonialItem.appendChild(img);
    
                    const name = document.createElement('h3');
                    name.textContent = testimonial.name;
                    testimonialItem.appendChild(name);
    
                    const content = document.createElement('p');
                    content.textContent = testimonial.content;
                    testimonialItem.appendChild(content);
    
                    container.appendChild(testimonialItem);
                });
                addAnimation();  // Call the addAnimation function after loading testimonials
            })
            .catch(error => console.error('Error fetching testimonials:', error));
    });
    
    const scrollers = document.querySelectorAll(".scroller");
    
    function addAnimation() {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);
    
                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);
    
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }