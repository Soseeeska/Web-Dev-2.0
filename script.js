document.addEventListener("DOMContentLoaded", function () {
    const testimonialsWrapper = document.getElementById("testimonial-container");
    const testimonials = document.querySelectorAll(".testimonialItem");
    const timerProgress = document.querySelector(".timer-progress");
    let currentIndex = 0;

    if (!testimonialsWrapper || !testimonials.length || !timerProgress) {
        console.error("One or more required elements not found.");
        return;
    }

    // Calculate the width of a single testimonial including margin-right
    const testimonialWidth = testimonials[0].offsetWidth + parseInt(getComputedStyle(testimonials[0]).marginRight, 10);

    function showNextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        const offset = -currentIndex * testimonialWidth;
        testimonialsWrapper.style.transform = `translateX(${offset}px)`;
        resetTimer();
    }

    function resetTimer() {
        timerProgress.style.transition = "none";
        timerProgress.style.strokeDashoffset = 113; // Reset the dash offset
        setTimeout(() => {
            timerProgress.style.transition = "stroke-dashoffset 3s linear";
            timerProgress.style.strokeDashoffset = 0; // Start the timer
        }, 50);
    }

    setInterval(showNextTestimonial, 3000);
    resetTimer(); // Initialize the first timer
});
