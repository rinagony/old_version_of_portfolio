var ctx = document.getElementById('myChart').getContext('2d');
var myChart;
const updButton = document.querySelector('.updButton');
let inUpdBut = document.querySelector(".inUpdBut");
let startButton = document.querySelector(".startButton");
var el = document.getElementById('fruit');
// Генерируем даные
// labels
// Данные приходят из html элемента
let chartData__labels = [];
// datasets

// одинковые числа, chartData__labels.lenght - количество чисел в дате
// одинковые числа, chartData__labels.lenght - количество элементов в массиве  дата
const chartData__datasestData = [];
// -- data (одинаковые числа)
// -- bgc color []

const chartData__sourceBGCcolor = [];
const chartData__sourcetBCcolor = [];

// -- borderColor []
let chartData__datasetBGCcolor = [];
let chartData__datasetBCcolor = [];


// Формируем данные чарта



startButton.addEventListener("click", function(){
	if (myChart) {
		myChart.destroy();
		// Почистить
		while(chartData__sourceBGCcolor.length > 0) {
		    chartData__sourceBGCcolor.pop();
		}	
		while(chartData__sourcetBCcolor.length > 0) {
		  chartData__sourcetBCcolor.pop();
		}
		while(chartData__datasestData.length > 0) {
		  chartData__datasestData.pop();
		}
	}
	let inputValue = inUpdBut.value.split(',');
	let clearValue = [];
	inputValue.forEach((el) => {
		clearValue.push(el.trim());
	})
	chartData__labels = clearValue;
	console.log(chartData__labels)
	chartData__labels.forEach(()=>{
		chartData__datasestData.push(1);
	    let color = getRandomColor();
	   chartData__sourceBGCcolor.push(color );
	   chartData__sourcetBCcolor.push(color );
	})
	chartData__datasetBGCcolor = chartData__sourceBGCcolor.slice();
	chartData__datasetBCcolor = chartData__sourcetBCcolor.slice();



	// console.log(chartData__sourceBGCcolor);
	// console.log(chartData__sourcetBCcolor);
	// console.log(chartData__datasetBGCcolor);
	// console.log(chartData__datasetBCcolor);
	let chartData = {
        labels: chartData__labels,
        datasets: [{
            label: '# of Votes',
            data: chartData__datasestData,
            backgroundColor:  chartData__datasetBGCcolor,
            borderColor: chartData__datasetBCcolor,
            borderWidth: 1
        }]
    }
    console.log(chartData);
    myChart = new Chart(ctx, {
		type: 'pie',
		data: chartData,
		options: {}
	});
})
	

		function colorChange () {
		chartData__datasetBGCcolor[currentPizzaCounter] = "#dfdfdf5e";
		if (currentPizzaCounter !== 0) {
			chartData__datasetBGCcolor[currentPizzaCounter - 1] =  chartData__sourceBGCcolor[currentPizzaCounter - 1];
		} else {
			chartData__datasetBGCcolor[chartData__datasetBGCcolor.length - 1] =  chartData__sourceBGCcolor[chartData__datasetBGCcolor.length - 1];
		}

		if (currentPizzaCounter < (chartData__datasetBGCcolor.length - 1)) {
			currentPizzaCounter++;
		}
	   	 else{currentPizzaCounter = 0}
	   	 	  myChart.update();
			  myChart.render();
	}	





// https://coderoad.ru/36949343/Chart-js-%D0%B4%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%B0-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%D0%B0-%D0%BD%D0%B0%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F-%D0%91%D0%B0%D1%80

let currentPizzaCounter;
console.log(chartData__datasetBGCcolor);
updButton.addEventListener("click", function(){
  	myChart.update();
 	myChart.render();
	// 1. Сколько раз произойдет переключение цвета (случайное число, зависимое от количества пунктов)
	// количество переключений = chartData__labels.lenght * 2 +  randomInteger(1, chartData__labels.lenght)
	let rNum = randomInteger(1, chartData__labels.length);
	let chagneColorCounter = chartData__labels.length * 2 +  rNum;
	console.log("chagneColorCounter", chagneColorCounter)
	let counterStep = 0;
	let chagneColorSpeed = 300;
	currentPizzaCounter = 0;
	

	let timerId = setTimeout(function tick() {
		// console.log(chagneColorCounter);
		console.log(counterStep);
	 	if(chagneColorCounter > 0){

	 		// если проходим первый круг, то задержка постоянная
	 		if(counterStep < chartData__labels.length*2 && counterStep >= chartData__labels.length) {
	 				chagneColorSpeed = chagneColorSpeed + 50;
	 		}	
	 		if(counterStep < chartData__labels.length*3 && counterStep >= chartData__labels.length*2){
	 				chagneColorSpeed = chagneColorSpeed + 100;
	 		}
			// если проходим второй круг, то задержка линейнно увеличиввается постоянная (+50)

			// если трейти круг - то задержка сильно увеличивается (+100)
			colorChange();
 		 	timerId = setTimeout(tick, chagneColorSpeed);	
	 	}
	 	else{
	 		if(chartData__datasetBGCcolor[currentPizzaCounter] = "#dfdfdf5e"){
			el.textContent = chartData__labels[currentPizzaCounter - 1]	;
				}
	 		$('#myModal').modal('show')
	 	}
	 	chagneColorCounter--;
		counterStep++;

	}, chagneColorSpeed);
	/*
	while(chartData__datasetBGCcolor.length > 0) {
		chartData__datasetBGCcolor.pop();
	}
	chartData__labels.forEach(()=>{
		let color = getRandomColor();
	   chartData__datasetBGCcolor.push(color );
	   chartData__datasetBCcolor.push(color );
	})
	*/
	
	// console.log(chartData__datasetBGCcolor);
	//myChart.destroy();
	/*
	myChart = new Chart(ctx, {
		type: 'pie',
		data: chartData,
		options: {}
	});
	*/
	
})
//window.mychart.update();

function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}