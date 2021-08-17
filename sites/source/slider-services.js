
var slides = document.querySelectorAll(".slideServices");
var dots = document.querySelectorAll(".dotServices");
var index = 0;

function prevSlideServices(n) {
    index += n;
    changeSlideServices();
}

function nextSlideServices(n) {
    index += n;
    changeSlideServices();
}

changeSlideServices();

function changeSlideServices() {

    if (index > slides.length - 1)
        index = 0;

    if (index < 0)
        index = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

        dots[i].classList.remove("activeServices");
    }

    slides[index].style.display = "block";
    dots[index].classList.add("activeServices");
}

// mobile slider

var slidesMobile = document.querySelectorAll(".slideServicesMobile");
var dotsMobile = document.querySelectorAll(".dotServicesMobile");
var indexMobile = 0;

function prevSlideServicesMobile(n) {
    indexMobile += n;
    changeSlideServicesMobile();
}

function nextSlideServicesMobile(n) {
    indexMobile += n;
    changeSlideServicesMobile();
}

changeSlideServicesMobile();

function changeSlideServicesMobile() {

    if (indexMobile > slidesMobile.length - 1)
        indexMobile = 0;

    if (indexMobile < 0)
        indexMobile = slidesMobile.length - 1;

    for (let i = 0; i < slidesMobile.length; i++) {
        slidesMobile[i].style.display = "none";

        dotsMobile[i].classList.remove("activeServicesMobile");
    }

    slidesMobile[indexMobile].style.display = "block";
    dotsMobile[indexMobile].classList.add("activeServicesMobile");
}