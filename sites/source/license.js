
(function () {

    function sliderInitialisationLicense(options) {
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
          if (e.target.classList.contains("rightSliderLicense")) {
            if (currentIndex < slides.length) {
              currentIndex++;
              moveSlider();
              console.log("кликнули далее");
            } else if ((currentIndex = slides.length)) {
              currentIndex = 1;
              moveSlider();
              console.log("lll");
            }
          } else if (e.target.classList.contains("leftSliderLicense")) {
            if (currentIndex > 1) {
              currentIndex--;
              moveSlider();
              console.log("кликнули далее");
            } else{
              currentIndex = slides.length;
              moveSlider();
              console.log("lll");
            }
          }
      
          console.log("currentIndex", currentIndex, slides.length);
        });
      
        function moveSlider() {
          let result = (currentIndex - 1) * 100;
          sliderLine.style.transform = `translate(-${result}%, 0px)`;
        }
      }

      sliderInitialisationLicense({
        root: ".slider13",
        startIndex: 1,
        autoplay: false,
        autoplaydelay: 4500,
      });

    function openModal() {

        var modalTrigger = document.getElementsByClassName('licenseOpenImage');

        for (var i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].onclick = function () {
                let images = document.getElementById('imageItemLicense');
                if(typeof(images) != 'undefined' && images != null ) {
                    images.remove();
                }
                var target = this.getAttribute('href').substr(1);
                var modalWindow = document.getElementById(target);
                let modalContainer = document.getElementById('modal__container');
                let attributes = this.getAttribute('data-license');
                var node = document.createElement("img");
                node.src = `img/license/${attributes}.jpg`;
                node.setAttribute('id','imageItemLicense');
                modalContainer.appendChild(node);
                modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';
            }
        }
    }

    function closeModal() {
        var closeButton = document.getElementsByClassName('jsModalClose');
        var closeOverlay = document.getElementsByClassName('jsOverlay');

        for (var i = 0; i < closeButton.length; i++) {
            closeButton[i].onclick = function () {
                var modalWindow = this.parentNode.parentNode;

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

        for (var i = 0; i < closeOverlay.length; i++) {
            closeOverlay[i].onclick = function () {
                var modalWindow = this.parentNode;

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

    }

    function ready(fn) {
        if (document.readyState != 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(openModal);
    ready(closeModal);
}());