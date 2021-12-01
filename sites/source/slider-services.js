function sliderInitialisation(options) {
  console.log(options);
  const root = document.querySelector(options.root);
  const sliderLine = root.querySelector(".sliderLine");
  const slides = root.querySelectorAll(".sliderLine > div");
  const sliderControl = root.querySelector(".sliderControl");
  let currentIndex = options.startIndex;
  moveSlider();

  setTimeout(function () {
    sliderLine.classList.add("animated");
  }, 1500);
  console.log(currentIndex);
  console.log(sliderLine, sliderControl);

  if (options.autoplay == true) {
    setInterval(function () {
      if (currentIndex < slides.length) {
        currentIndex++;
      } else {
        currentIndex = 1;
      }
      moveSlider();
    }, options.autoplaydelay);
  }

  sliderControl.addEventListener("click", function (e) {
    if (e.target.classList.contains("rightSlider")) {
      if (currentIndex < slides.length) {
        currentIndex++;
        moveSlider();
        changeHeight(currentIndex)
      } else if ((currentIndex = slides.length)) {
        currentIndex = 1;
        moveSlider();
        changeHeight(currentIndex)
      }
    }

    console.log("currentIndex", currentIndex, slides.length);
  });

  function moveSlider() {
    let result = (currentIndex - 1) * 100;
    sliderLine.style.transform = `translate(-${result}%, 0px)`;
  }

  function changeHeight(currentIndex) {
    let childs = sliderLine.children[currentIndex-1]
    let heightChild = childs.children[0].offsetHeight;
    let heightPX = heightChild.toString()
    sliderLine.children[currentIndex-1].style.height = heightPX + 'px';
    sliderLine.style.height = heightPX + 'px';
  }
}

if (document.getElementById("aboutBlock")) {
  sliderInitialisation({
    root: ".slider1",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });
}

if(document.getElementById('sliderPublication')) {
  sliderInitialisation({
    root: ".slider14",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });
}

if (document.getElementById("firstservice")) {
  sliderInitialisation({
    root: ".slider2",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });

  sliderInitialisation({
    root: ".slider3",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });

  sliderInitialisation({
    root: ".slider4",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });

  sliderInitialisation({
    root: ".slider5",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });

  sliderInitialisation({
    root: ".slider6",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });

  sliderInitialisation({
    root: ".slider7",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });

  sliderInitialisation({
    root: ".slider8",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });

  sliderInitialisation({
    root: ".slider9",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });

  sliderInitialisation({
    root: ".slider10",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });

  sliderInitialisation({
    root: ".slider11",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });

  sliderInitialisation({
    root: ".slider12",
    startIndex: 1,
    autoplay: false,
    autoplaydelay: 4500,
  });
}

(function () {
  let buttonsTabs = document.getElementsByClassName("tablink");
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

        let imagepathbg = buttonsTabs[i].getAttribute("data-image");
        imageBg.style.background = `url('img/works/${imagepathbg}')`;

        imageBg.style.backgroundSize = "cover";
        imageBg.style.backgroundRepeat = "no-repeat";
        index = 0;
      });
    }
  }

  if (window.innerWidth < 768) {
    for (let i = 0; i < buttonsTabs.length; i++) {
      buttonsTabs[i].addEventListener("click", function () {
        let attrib = buttonsTabs[i].getAttribute("data-tabmob");
        titleMain.innerHTML = buttonsTabs[i].innerHTML;
        shrimp.innerHTML = buttonsTabs[i].innerHTML;
        let blockname = document.getElementById(attrib);

        let imagepathbg = buttonsTabs[i].getAttribute("data-image");
        imageBg.style.background = `url('img/works/${imagepathbg}')`;

        imageBg.style.backgroundSize = "cover";
        imageBg.style.backgroundRepeat = "no-repeat";
        indexMobile = 0;
      });
    }
  }

  //tabs services

  let buttondefault = document.getElementById("defaultOpenServices");
  buttondefault.click();
})();
