// tabs mobile laguages
const tabsWrapper = document.querySelector(".tabs")
const tabs = tabsWrapper.querySelectorAll(".tab");
const tabsPanel = document.querySelectorAll(".tabs-panel");

tabsWrapper.addEventListener('click', (e) => {
	let target = e.target;
	// console.log(target)
	if(e.target.classList.contains('tab')) {
		console.log(target)
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


})
// tabs mobile laguages


//Audio Player Mobile version
var track = document.getElementById('trackMob');
var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pauseMob";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "playMob";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "playMob";
});
//Audio Player Mobile version