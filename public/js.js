// Script to handle "to the top" button
const toTopBtn = document.getElementById('toTopBtn');


window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }
};

toTopBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

app.use(express.static(path.join(__dirname,"public")));

//lets talk button 
