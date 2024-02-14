let slideIndex = 0;
showSlide(slideIndex);

noButton.addEventListener('click', function() {

    let currentNoFontSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    let currentYesFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

    if (currentNoFontSize > 6) { // Minimum font size
        noButton.style.fontSize = (currentNoFontSize - 6) + 'px'; // Reduce font size
        yesButton.style.fontSize = (currentYesFontSize + 12) + 'px'; // Increase font size
    } else {
        noButton.style.display = 'none';
    }
});

yesButton.addEventListener('click', function() {
    showSlide(slideIndex + 1); // Move to the next slide
});

function nextSlide() {

    showSlide(++slideIndex);  
}

function showSlide(index) {
    
    let slides = document.querySelectorAll('.slide');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slides[index].style.display = 'block';
}
