
(function () {
    const header = document.querySelector('.headerMob');
    const icon = document.querySelector('.icon-container');
    icon.onclick = function () {
        header.classList.toggle('menu-open');
    }
}());




function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "#222222";
    }

    document.getElementById(pageName).style.display = "block";

    elmnt.style.color = '#828282';
}

if (window.innerWidth > 768) {
    document.getElementById("defaultOpen").click();
} else {
    var slidesPublic = document.querySelectorAll(".slidePublic");
    var dotsPublic = document.querySelectorAll(".dotPublic");
    var indexPublic = 0;

    function prevSlidePublic(n) {
        indexPublic += n;
        changeSlidePublic();
    }

    function nextSlidePublic(n) {
        indexPublic += n;
        changeSlidePublic();
    }

    changeSlidePublic();

    function changeSlidePublic() {

        if (indexPublic > slidesPublic.length - 1)
            indexPublic = 0;

        if (indexPublic < 0)
            indexPublic = slidesPublic.length - 1;

        for (let i = 0; i < slidesPublic.length; i++) {
            slidesPublic[i].style.display = "none";

            dotsPublic[i].classList.remove("activePublic");
        }

        slidesPublic[indexPublic].style.display = "block";
        dotsPublic[indexPublic].classList.add("activePublic");
    }

    document.getElementById("defaultOpenMob").click();
    document.getElementById("defaultOpenServices").click();
}