
// mobile

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



(function() {
	const sliderLine = document.querySelector('.sliderLine');
	const slides = sliderLine.querySelectorAll('.showSlide');
	const sliderControl = document.querySelector('.sliderControl');
	let currentIndex = 1;
	sliderControl.addEventListener('click', function (e) {
		if(e.target.classList.contains('left') && currentIndex > 1 ) { 
			currentIndex--
			 moveSlider();
		} else if(e.target.classList.contains('right') && currentIndex < slides.length) { 
			currentIndex++
			 moveSlider();
		}
		
		
	})


	function moveSlider(){

	// 1 -> 0%
	// 2 -> 100%
	// 3 -> 200%

		
		let result = (currentIndex - 1) * 100;

		// 200 = (3 * 100) - 100
		// 200 = (3 - 1) * 100


		sliderLine.style.transform = `translate(-${result}%, 0px)`;
	}
})();


// mainSlider

(function() {
	const sliderMain = document.querySelector('.sliderMain');
	const slides = sliderMain.querySelectorAll('.slidesMain');
	console.log(slides.length)
	const sliderControlFirst = document.querySelector('.wrapperMainControls');
	let currentIndexFirst = 1;
	sliderControlFirst.addEventListener('click', function (e) {
		if(e.target.classList.contains('leftMain') && currentIndexFirst > 1 ) {
			currentIndexFirst--
			 moveSliderFirst();
		} else if(e.target.classList.contains('rightMain') && currentIndexFirst < slides.length) {
			currentIndexFirst++
			 moveSliderFirst();
		}
		
	})

console.log(screen.width)

	function moveSliderFirst(){
		// if(screen.width < 576) {
		// 	var size1 = (screen.width)/156;
		// 	let result = (currentIndexFirst - 1) * size1;
		// 	sliderMain.style.transform = `translate(-${result}%, 0px)`;
		// } else if(screen.width > 576) {
		// 	let size = (screen.width)/8.7;
		// 	let result = (currentIndexFirst - 1) * size;
		// 	sliderMain.style.transform = `translate(-${result}%, 0px)`;
		// }

		let result = (currentIndexFirst - 1) * 100;
			sliderMain.style.transform = `translate(-${result}%, 0px)`;
	}
})();

// mainSlider

// gallery
const MODALBODY = document.querySelector('.modalBody');

document.addEventListener('click', function(e){
	if(e.target.classList.contains('modal')) {
		e.target.classList.remove('show');
	}
})


gallery.addEventListener('click', function(e){
	e.preventDefault();

	let modalClassName = '.modal' //'.modal'
	let modal = document.querySelector(modalClassName)


	// Проверить - кликнули на ссылку или картинку

	console.log(e.target)
	if(e.target.tagName == 'IMG') {
		createImgInModal(e.target.parentNode.getAttribute('href'));
		modal.classList.add('show');

	}
	if(e.target.tagName == 'A') {
		createImgInModal(e.target.getAttribute('href'))
		modal.classList.add('show');
	}
})

function createImgInModal(href) {

	MODALBODY.innerHTML = ""; // очищаем

	let newImg = document.createElement('IMG');
	newImg.classList.add('modalImg');
	newImg.setAttribute('src', href);
	MODALBODY.appendChild(newImg);

}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const tabsWrapper = document.querySelector(".buttonsCollapse")
const tabs = tabsWrapper.querySelectorAll(".tab");
const tabsPanel = document.querySelectorAll(".contentCollapse");

tabsWrapper.addEventListener('click', (e) => {
	let target = e.target;
	if(e.target.classList.contains('tab')) {
		for(let i=0; i<tabs.length; i++) {
			tabs[i].classList.remove('active');
		}
		target.classList.add('active');
		for(let i = 0; i<tabsPanel.length; i++) {
			tabsPanel[i].classList.remove('active');
			if(tabsPanel[i].dataset.index == target.dataset.index) {
				tabsPanel[i].classList.add('active')
			}
		}
		
	}


})
