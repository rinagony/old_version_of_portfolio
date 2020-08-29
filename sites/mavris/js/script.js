
const tabsWrapper = document.querySelector(".tabs")
const tabs = tabsWrapper.querySelectorAll(".tab");
const tabsPanel = document.querySelectorAll(".tabs-panel");

tabsWrapper.addEventListener('click', (e) => {
	let target = e.target;
	if(e.target.classList.contains('tab')) {
		for(let i=0; i<tabs.length; i++) {
			tabs[i].classList.remove('active')
		}
		target.classList.add('active');
		for(let i = 0; i<tabsPanel.length; i++) {
			tabsPanel[i].classList.remove('active');
			if(tabsPanel[i].dataset.index == target.dataset.index) {
				tabsPanel[i].classList.add('active')
			}
		}
		
	}


});




function sliderInit(options) {

	const root = document.querySelector(options.root);
	const sliderLine = root.querySelector('.sliderLine');
	const slides = root.querySelectorAll('.sliderLine > div');
	const sliderControl = root.querySelector('.sliderControl');
	let currentIndex = options.startIndex;
	const numberOfSlides = document.querySelector('#numberOfSlides');
	const numberOfSlidesSec = document.querySelector('#numberOfSlidesSec');
	moveSlider();

	setTimeout(function(){ sliderLine.classList.add('animated'); }, 1500);

	if(options.autoplay == true) {
		setInterval(function(){
		
		if(currentIndex < slides.length) {
			currentIndex++		
		} else {
			currentIndex = 1;
			sliderControl
		} 
		moveSlider()

		}, options.autoplaydelay);
	}

	

	sliderControl.addEventListener('click', function (e) {
		if(e.target.classList.contains('leftSec') && currentIndex > 1 ) {
			currentIndex--
			 moveSlider();
			 numberOfSlides.innerHTML --;
			 numberOfSlidesSec.innerHTML --;
		} else if(e.target.classList.contains('rightSec') && currentIndex < slides.length) {
			currentIndex++
			 moveSlider();
			  numberOfSlides.innerHTML ++;
			 numberOfSlidesSec.innerHTML ++;
		}
		
	})

	function moveSlider(){	
		let result = (currentIndex - 1) * 100;
		sliderLine.style.transform = `translate(-${result}%, 0px)`;
	}
}

sliderInit({
	root: ".slider1",
	startIndex: 1,
	autoplay: false,
	autoplaydelay: 0
});

sliderInit({
	root: ".slider2",
	startIndex: 1,
	autoplay: false,
	autoplaydelay: 0
});


// 1. Слайдер (внутри форм) - html
// 2. инпуты для ввода результата (разлличных типов)
// 3. State - для управления состояние слайдера (текущий слайд)

const STATE = {
	currentIndex: 1,
}

const STORE = {
	where: "В офис",
	which: "Вертикальные жалюзи"
}

// STORE.where = inputSelect.value;
// 4. Store - для хранения результатов (которые надо предварительно собрать, до отправки)

// 5. Отправляет результат на сервер и тд
const inputsWrpFirstSlide = document.querySelector('.inputsWrpFirstSlide');
const inputFirst = inputsWrpFirstSlide.querySelectorAll('input')
const imgFirstQuest = document.querySelectorAll('.imgFirstQuest');



var inputHiddenQuest = document.querySelectorAll('.inputHiddenQuest');
var btnNextQuest = document.querySelectorAll('.btnNextQuest');
let information = [];
var numberCanOrCant;

for(i=0; i<btnNextQuest.length; i++) {
	for(i=0; i<inputHiddenQuest.length; i++) {
		inputHiddenQuest[i].addEventListener('click', function() {
			information.push(this.value);
			numberCanOrCant = true;
			console.log(information);
		})
	}
}



var slideIndex = 1;
showSlides(slideIndex);


$(".labelsWrpFourthQuest input").on("change", function() {
  numberCanOrCant = true;
});

$(".inputsWrpFirstSlide input").on("change", function() {
  numberCanOrCant = true;
});

function plusSlide() {
	if(numberCanOrCant) {
		showSlides(slideIndex += 1);
		numberCanOrCant = false;
	}

}



function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideItem");
    var dots = document.getElementsByClassName("slider-dots_item");
    var sliderMain = document.querySelector(".sliderMain");
    if (n > slides.length) {
      loadItemBlock()
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active wasActive";
}

const sliderMain = document.querySelector('.sliderMain');
const endOfTheTest = document.querySelector('#endOfTheTest');
const loadItem = document.querySelector('.loadItem');



function loadItemBlock() {
	sliderMain.style.display = 'none';
		imgFormWrp.style.display = 'none';
	$(".loadItem").show('slow');
	setTimeout(function() { $(".loadItem").hide('slow'); slideItemFinish.style.display = 'block'; imgFormWrp.style.display = 'block'; imgFormWrp.style.height = '120%';
	imgFormWrp.style.marginTop = '40px';
}, 1000);
}


const howMuchWindowInp = document.querySelector('#howMuchWindowInp');
const volume = document.querySelector('#volume');
const wrpGiftRightSec = document.querySelector('#wrpGiftRightSec');
volume.addEventListener('click', function() {
	howMuchWindowInp.innerHTML = volume.value;
})

giftItemSixth.addEventListener('click', function() {
	wrpGiftRight.src = giftItemSixth.src;
	wrpGiftRightSec.src = giftItemSixth.src;
})

giftItemSixthSec.addEventListener('click', function() {
	wrpGiftRight.src = giftItemSixthSec.src;
	wrpGiftRightSec.src = giftItemSixthSec.src;
})

const wrpMessagerItem = document.querySelectorAll('.wrpMessagerItem');
const sendYourMessager = document.querySelector('#sendYourMessager');
for(i=0; i<wrpMessagerItem.length; i++) {
	wrpMessagerItem[i].addEventListener('click', function() {
		sendYourMessager.innerHTML = this.lastElementChild.innerHTML;
		// wrpMessagerItem.style.border = '1px solid red';
	})
}


const nextSecond = document.querySelector('#nextSecond');
const slideItemFinishThird = document.querySelector('#slideItemFinishThird');
nextSecond.addEventListener('click', function() {
	setTimeout(function(){ slideItemFinish.style.display = 'none'; slideItemFinishThird.style.display = 'block'; imgFormWrp.style.display= 'none';}, 500);
})

