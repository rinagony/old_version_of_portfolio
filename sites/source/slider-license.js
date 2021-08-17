
var slidesLicense = document.querySelectorAll(".slideLicense");
var dotsLicense = document.querySelectorAll(".dotLicense");
var indexLicense = 0;

function prevSlideLicense(n) {
    indexLicense += n;
    changeSlideLicense();
}

function nextSlideLicense(n) {
    indexLicense += n;
    changeSlideLicense();
}

changeSlideLicense();

function changeSlideLicense() {

    if (indexLicense > slidesLicense.length - 1)
        indexLicense = 0;

    if (indexLicense < 0)
        indexLicense = slidesLicense.length - 1;

    for (let i = 0; i < slidesLicense.length; i++) {
        slidesLicense[i].style.display = "none";

        dotsLicense[i].classList.remove("activeLicense");
    }

    slidesLicense[indexLicense].style.display = "block";
    dotsLicense[indexLicense].classList.add("activeLicense");
}