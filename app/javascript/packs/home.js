let slideIndex = 1;

showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides.item(slideIndex - 1).style.display = "block";
    dots.item(slideIndex - 1).className += " active";
}


plusSlides = (n) => {
    showSlides((slideIndex += n));
}

currentSlide = (n) => {
    showSlides((slideIndex = n));
}

showSlides(slideIndex);

