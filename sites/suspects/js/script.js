

function summa(a, b) {
	var result = (a + b)*34;
	console.log("Your summ is " + result);
	return result;
}



var calc__startBtn = document.querySelector(".calc__startBtn");

calc__startBtn.addEventListener("click", calculator);
calc__startBtn.addEventListener("mouseover", function(e) {
	console.log("m over");
});

calc__startBtn.addEventListener("mouseout", function(event){
	console.log("m out");
	console.log(event.target);
});



function calculator() {
	var calc__num1 = document.querySelector(".calc__num1");
	var calc__num2 = document.querySelector(".calc__num2");
	var calc__result = document.querySelector(".calc__result");

	console.log(calc__num1.value);
	console.log(calc__num2.value);

	var val1 = parseFloat(calc__num1.value);
	var val2 = parseInt(calc__num2.value);

	calc__result.textContent = summa(val1, val2);
}

calculator();
// 0. Находим нужные html-узлы
// 1. Считываем значения input (узнаем введеные цифры)
// 2. Запускаем функцию подсчёта, передв в неё нужные введенные цифры
// 3. Полученный результат выводим на сайт

// Для запуска функции нужен слушатель события (тип события - клик)

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}