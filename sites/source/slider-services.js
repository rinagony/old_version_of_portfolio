(function () {
  let buttonsTabs = document.getElementsByClassName("tablink");
  var slides = document.querySelectorAll(".slideServices");
  var dots = document.querySelectorAll(".dotServices");
  let titleMain = document.getElementById("titleServicesMain");
  let shrimp = document.getElementById("lastShrimpBread");
  let imageBg = document.getElementById("navigationServicesImageItem");
  var index = 0;

  if (window.innerWidth > 768) {
    for (let i = 0; i < buttonsTabs.length; i++) {
      buttonsTabs[i].addEventListener("click", function () {
        let attrib = buttonsTabs[i].getAttribute("data-tab");
        titleMain.innerHTML = buttonsTabs[i].innerHTML;
        shrimp.innerHTML = buttonsTabs[i].innerHTML;
        let blockname = document.getElementById(attrib);
        // slides = blockname.querySelectorAll(".slideServices");

        let imagepathbg = buttonsTabs[i].getAttribute("data-image");
        imageBg.style.background = `url('img/works/${imagepathbg}')`;

        imageBg.style.backgroundSize = "cover";
        imageBg.style.backgroundRepeat = "no-repeat";
        index = 0;
      });
    }
  }

  if (document.getElementById("sliderServicesMain")) {
    sliderInit({
      root: "#sliderServicesMain",
    });
  }

  if (document.getElementById("sliderServicesTwelve")) {
    sliderInit({
      root: "#sliderServicesTwelve",
    });
  }

  if (window.innerWidth < 768) {
    for (let i = 0; i < buttonsTabs.length; i++) {
      buttonsTabs[i].addEventListener("click", function () {
        let attrib = buttonsTabs[i].getAttribute("data-tabmob");
        titleMain.innerHTML = buttonsTabs[i].innerHTML;
        shrimp.innerHTML = buttonsTabs[i].innerHTML;
        let blockname = document.getElementById(attrib);
        // slidesMobile = blockname.querySelectorAll(".slideServicesMobile");

        let imagepathbg = buttonsTabs[i].getAttribute("data-image");
        imageBg.style.background = `url('img/works/${imagepathbg}')`;

        imageBg.style.backgroundSize = "cover";
        imageBg.style.backgroundRepeat = "no-repeat";
        indexMobile = 0;
      });
    }
  }

  function prevSlideServices(n, block) {
    let blockname = document.getElementById(block);
    slides = blockname.querySelectorAll(".slideServices");
    index += n;
    changeSlideServices();
  }

  function nextSlideServices(n, block) {
    let blockname = document.getElementById(block);
    slides = blockname.querySelectorAll(".slideServices");
    index += n;
    changeSlideServices();
  }

  changeSlideServices();

  function changeSlideServices() {
    if (index > slides.length - 1) index = 0;

    if (index < 0) index = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";

      dots[i].classList.remove("activeServices");
    }

    slides[index].style.display = "block";
    dots[index].classList.add("activeServices");
  }

  // mobile slider geodez soprovozhdenie
  function sliderInit(rootElement) {
    const root = document.querySelector(rootElement.root);
    var slidesMobile = root.querySelectorAll(".slideServices");
    var dotsMobile = root.querySelectorAll(".dotServices");
    let wrapperButtons = root.querySelector(".wrapperControlsServices");
    var indexMobile = 0;
    console.log(wrapperButtons);
    wrapperButtons.addEventListener("click", function (e) {
      if (e.target.classList.contains("left")) {
        // доделать проверки на крайние позиции
        //   slidesMobile = root.querySelectorAll(".slideServicesMobile");
        indexMobile += -1;
        changeSlideServicesMobile();
      } else if (e.target.classList.contains("right")) {
        // доделать проверки на крайние позиции
        //   slidesMobile = root.querySelectorAll(".slideServicesMobile");
        indexMobile += 1;
        changeSlideServicesMobile();
      }
    });

    changeSlideServicesMobile();

    function changeSlideServicesMobile() {
      if (indexMobile > slidesMobile.length - 1) indexMobile = 0;

      if (indexMobile < 0) indexMobile = slidesMobile.length - 1;

      for (let i = 0; i < slidesMobile.length; i++) {
        slidesMobile[i].style.display = "none";
      }
      slidesMobile[indexMobile].style.display = "block";
      console.log(indexMobile);
      dotsMobile[indexMobile].classList.add("activeServicesMobile");
    }
  }

  sliderInit({
    root: "#sliderServicesFirst",
  });

  sliderInit({
    root: "#sliderServicesSecond",
  });

  sliderInit({
    root: "#sliderServicesThirdItem",
  });

  sliderInit({
    root: "#sliderServicesFour",
  });

  sliderInit({
    root: "#sliderServicesFifthItem",
  });

  sliderInit({
    root: "#sliderServicesSixth",
  });

  sliderInit({
    root: "#sliderServicesSeven",
  });

  sliderInit({
    root: "#sliderServicesEight",
  });

  sliderInit({
    root: "#sliderServicesNine",
  });

  sliderInit({
    root: "#sliderServicesTen",
  });

  sliderInit({
    root: "#sliderServicesEleven",
  });
  
  //tabs services

  let buttondefault = document.getElementById("defaultOpenServices");
  buttondefault.click();
})();
