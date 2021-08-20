let buttonsTabs = document.getElementsByClassName('tablink');
var slides = document.querySelectorAll(".slideServices");
var dots = document.querySelectorAll(".dotServices");
let titleMain = document.getElementById('titleServicesMain');
let shrimp = document.getElementById('lastShrimpBread');
var index = 0;


if (window.innerWidth > 768) {
    for (let i = 0; i < buttonsTabs.length; i++) {
        buttonsTabs[i].addEventListener('click', function () {
            let attrib = buttonsTabs[i].getAttribute('data-tab');
            titleMain.innerHTML = buttonsTabs[i].innerHTML;
            shrimp.innerHTML = buttonsTabs[i].innerHTML;
            let blockname = document.getElementById(attrib);
            slides = blockname.querySelectorAll(".slideServices");
            index = 0;
            changeSlideServices();
        })
    }
}

function prevSlideServices(n, block) {
    let blockname = document.getElementById(block);
    slides = blockname.querySelectorAll(".slideServices")
    index += n;
    changeSlideServices();
}

function nextSlideServices(n, block) {
    let blockname = document.getElementById(block);
    slides = blockname.querySelectorAll(".slideServices")
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


if (window.innerWidth < 768) {
    for (let i = 0; i < buttonsTabs.length; i++) {
        buttonsTabs[i].addEventListener('click', function () {
            let attrib = buttonsTabs[i].getAttribute('data-tabmob');
            titleMain.innerHTML = buttonsTabs[i].innerHTML;
            shrimp.innerHTML = buttonsTabs[i].innerHTML;
            let blockname = document.getElementById(attrib);
            slidesMobile = blockname.querySelectorAll(".slideServicesMobile");
            indexMobile = 0
            changeSlideServicesMobile();
        })
    }
}

function prevSlideServicesMobile(n, block) {
    let blockname = document.getElementById(block);
    slidesMobile = blockname.querySelectorAll(".slideServicesMobile");
    indexMobile += n;
    changeSlideServicesMobile();
}

function nextSlideServicesMobile(n, block) {
    let blockname = document.getElementById(block);
    slidesMobile = blockname.querySelectorAll(".slideServicesMobile");
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

let buttondefault = document.getElementById('defaultOpenServices');
buttondefault.click();