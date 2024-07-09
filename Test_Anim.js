
document.addEventListener("DOMContentLoaded", function() {
    // Fetch testimonials from the server
    fetch('http://localhost/devsitev2.0/fetch_testimonials.php')
        .then(response => response.json()) 
        .then(data => {
            const container = document.getElementById('testimonial-container'); // Get the container  for testimonials

            // Loop through each testimonial in the fetched data
            data.forEach(testimonial => {
                const testimonialItem = document.createElement('div'); // Create a new div for each testimonial
                testimonialItem.classList.add('testimonialItem'); // Add a class to the div

                const img = document.createElement('img'); // Create an img element
                img.src = testimonial.image; 
                img.alt = 'Client Photo'; 
                img.classList.add('circular-image'); // Add a class to the image
                testimonialItem.appendChild(img); // Add the image to the testimonial item div

                const name = document.createElement('h3'); // Create an h3 element for the name
                name.textContent = testimonial.name; 
                testimonialItem.appendChild(name); // Add the name to the testimonial item div

                const content = document.createElement('p'); // Create a p element for the testimonial content
                content.textContent = testimonial.content; 
                testimonialItem.appendChild(content); 

                container.appendChild(testimonialItem); 
            });

            addAnimation(); // Call the animation function after loading testimonials
        })
        .catch(error => console.error('Error fetching testimonials:', error)); // Log any errors that occur during fetch
});

// Get all elements with the class "scroller"
const scrollers = document.querySelectorAll(".scroller");

// Function to add animation to scrollers
function addAnimation() {
    // Check if the user prefers reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        // Loop through each scroller element
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true); // Set a data attribute to indicate animation

            const scrollerInner = scroller.querySelector(".scroller__inner"); 
            const scrollerContent = Array.from(scrollerInner.children); 

            // Loop through each item in the scroller content
            scrollerContent.forEach((item) =>{
                const duplicatedItem = item.cloneNode(true); // Clone the item
                duplicatedItem.setAttribute("aria-hidden", true); // Set aria-hidden attribute to true for accessibility
                scrollerInner.appendChild(duplicatedItem); // Append the duplicated item to the inner element
            });
        });
    }
}
