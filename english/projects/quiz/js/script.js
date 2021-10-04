console.log("hello");
const addOptionInput = document.querySelector('.addOptionInput');
const addOptionBtn = document.querySelector('.addOptionBtn');
const ctx = document.getElementById('myChart').getContext('2d');
const startButton = document.querySelector('.startButton');
const modalBody = document.querySelector('.modal-body');
const winner = document.getElementById('winner');

var myChart;

let chart__labels = []

// ВСЕ МАССИВЫ ИМЕЮТ ОЛИНАКОВУЮ ДЛИНУ

const chart__datasets_data = [];


const chart__datasets_SRC_backgroundColor = [];
const chart__datasets_SRC_borderColor = [];

let chart__datasets_backgroundColor;
let chart__datasets_borderColor;


addOptionBtn.addEventListener('click', function() {

	const inputValue = addOptionInput.value;
	const inputArray = inputValue.split(",");
	const finalArray = [];
	inputArray.forEach((element) => {
		let goodWord = element.trim();
		finalArray.push(goodWord);
	})
	chart__labels = finalArray;
	console.log(chart__labels)

	// Обнулять все массивы - 
	// ДЗ - пройти по всему коду и обнаружить массив, который даёт лишние элементы (который не обнуляется) и обнулить его
	// Чаще используйте console.log для отслеживания состояния приложения
	// Понять алгоритм кода
	console.log(chart__datasets_backgroundColor);
	console.log(chart__datasets_borderColor);
	console.log(chart__datasets_data);
	console.log(chart__labels);

	chart__labels.forEach( () => {
	// Наполнить массив ОДИНАКОВЫМИ цифрми в количестве, равном количеству вариантов
		chart__datasets_data.push(1)

		let color = getRandomColor();
		chart__datasets_SRC_backgroundColor.push(color);
		chart__datasets_SRC_borderColor.push(color);
	})

	chart__datasets_backgroundColor = chart__datasets_SRC_backgroundColor.slice(); // [.., .. , ..]
	chart__datasets_borderColor = chart__datasets_SRC_borderColor.slice(); // [.., .. , ..]

	myChart = new Chart(ctx, {
	    type: 'pie',
	    data: {
	        labels: chart__labels,
	        datasets: [{
	            label: '# of Votes',
	            data: chart__datasets_data,
	            backgroundColor: chart__datasets_backgroundColor,
	            borderColor: chart__datasets_borderColor,
	            borderWidth: 1
	        }]
	    }
	})
})
//console.log(chart__datasets_data);

let currentChunck;
startButton.addEventListener('click', function() {

			
	if(currentChunck) {
	 	console.log(currentChunck);
		chart__datasets_backgroundColor[currentChunck-2] = chart__datasets_SRC_backgroundColor[currentChunck-2];
		chart__datasets_borderColor[currentChunck-2] = chart__datasets_SRC_borderColor[currentChunck-2];
		myChart.update();
		myChart.render();
	}
	currentChunck = 0;
	
	console.log(chart__datasets_backgroundColor);
	console.log(myChart.config.data.datasets);
	
	// Придумать, как запускать функцию чтобы она прошла два круга + рандомное количество (но не более третьтего круга) 
	let count = 0;
	let random = randomInteger(1, chart__labels.length)
	var totalSteps = (chart__labels.length * 2)+random;
	console.log(totalSteps)
	let timerSpeed = 250;
	let timerId = setTimeout(function tick() {
		if(count<totalSteps) {
			count++;
			
			if((chart__labels.length *2)-2 < count) {
				timerSpeed+=150;
			} 			


			changeChunkColor();

			if(totalSteps == count) {
				if(chart__datasets_backgroundColor[currentChunck] = "#ccc"){
					winner.textContent = chart__labels[currentChunck - 1];
				}
				$('#superModal').modal('show');
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
	 		timerId = setTimeout(tick, timerSpeed);
		}
	}, timerSpeed);

	console.log(currentChunck)
})

// HELPERS
// 1
// 2
function changeChunkColor() {
	currentChunck++;
	// 1 -> перекрашиваем 1
	// 2 -> возвращаем 1, перекрашиваем 2
	// 3 -> возвращаем 2, перекрашиваем 3
	// 4 -> возвращаем 3, перекрашиваем 4
	// 5 -> возвращаем 4, перекрашиваем 1
	

	if(currentChunck==1) {
		// console.log("Перекрасили первый кусок")

		chart__datasets_backgroundColor[currentChunck-1] = "#ccc";
		chart__datasets_borderColor[currentChunck-1] = "#ccc";
	} else if(currentChunck>chart__labels.length) {
		// console.log("Вышли на следующий круг")
		currentChunck = 1;
		chart__datasets_backgroundColor[currentChunck-1] = "#ccc";
		chart__datasets_borderColor[currentChunck-1] = "#ccc";

		chart__datasets_backgroundColor[chart__labels.length-1] = chart__datasets_SRC_backgroundColor[chart__labels.length-1];
		chart__datasets_borderColor[chart__labels.length-1] = chart__datasets_SRC_borderColor[chart__labels.length-1];
	}
	else {
		// console.log("Перекрасили какой-то кусок")

		chart__datasets_backgroundColor[currentChunck-1] = "#ccc";
		chart__datasets_borderColor[currentChunck-1] = "#ccc";

		chart__datasets_backgroundColor[currentChunck-2] = chart__datasets_SRC_backgroundColor[currentChunck-2];
		chart__datasets_borderColor[currentChunck-2] = chart__datasets_SRC_borderColor[currentChunck-2];
	}
	
	

	// console.log(chart__datasets_backgroundColor)

	// console.log(chart__datasets_backgroundColor[currentChunck-2])

	


	// console.log(chart__datasets_backgroundColor)
	
	myChart.update();
	myChart.render();

}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}