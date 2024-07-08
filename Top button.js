// Get the button
let toTopBtn = document.getElementById("toTopBtn");

// When you scroll down 20px from the top, it shows the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
toTopBtn.onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};