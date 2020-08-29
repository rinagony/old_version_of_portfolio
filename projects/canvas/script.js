var canvas = null; //канвас
var ctx = null; 
var mouseX = null; //местоположение мыши
var frames = 24; //частота отрисовывания
var ballX = 50; //коорд мяча
var ballY = 50;//коорд мяча
var ballStepX = 5//шаг коорд мяча
var ballStepY = 6;//шаг коорд мяча
var ballRadius = 10;//радиус мвча
var paddleX = null;//шаг коорд мяча
var paddleWidth = 100;//ширина палки
var paddleHeight = 10;//высота палки
var paddleOffset = 60;//отступ палки
var resultOfGame =  document.querySelector('#resultOfGame');
var numberResiltOfGaame = 0;
var resultFinish;
var storage = localStorage;
var btnStartGame = document.querySelector('#btnStartGame');

function mouseCoords (e) {
  var canvasOffset = canvas.getBoundingClientRect(); //определяем координаты сторон канваса
  var htmlElement = document.documentElement; //
  mouseX = e.clientX - canvasOffset.left - htmlElement.scrollLeft;
  paddleX = mouseX - paddleWidth/2;
}

window.addEventListener('DOMContentLoaded', function () {
  canvas = document.querySelector('#mainCanvas');
  ctx = canvas.getContext('2d');

  if ( ctx ) {

    canvas.width = 700;
    canvas.height = 500;

    var canvasSides = canvas.getBoundingClientRect();
    
    setInterval( function () {

      var paddleLeftEdge = paddleX;
      var paddleRightEdge = paddleLeftEdge + paddleWidth;
      var paddleTopEdge = canvas.height - paddleOffset;
      var paddleBottomEdge = paddleTopEdge + paddleHeight;

      ballX += ballStepX;
      ballY += ballStepY;

      if(ballY > canvas.height) {
        winner.textContent = "Ваш результат: " + numberResiltOfGaame + " очков";
        $('#superModal').modal('show');
        resultFinish = numberResiltOfGaame;
      }

      if ( ballX < 0 || ballX > canvas.width) {
             ballStepX *= -1;
       
      }

      if ( ballY < 0 ) {
          ballStepY *= -1;
      }

      if ( ballX > paddleLeftEdge && ballX < paddleRightEdge && ballY > paddleTopEdge && ballY < paddleBottomEdge ) {
          if( numberResiltOfGaame > 10) {
              ballStepX = 10;
              ballStepY = 12; 
      }
        ballStepY *= -1;
        numberResiltOfGaame+=5;
        resultOfGame.textContent = numberResiltOfGaame;
        let paddleCenter = paddleLeftEdge + paddleWidth/2; //центр
        let ballDistance = ballX - paddleCenter; //чем больше дистанция при отскоке, тем больше скорость
        ballStepX = ballDistance * 0.30; //постоянное обновление скорости
      }

      ctx.fillStyle = 'BLACK';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'pink';
      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, 360*Math.PI/180,true);
      ctx.fill();
      ctx.closePath();

      ctx.fillStyle = '#fff';
      ctx.fillRect(paddleX, canvas.height - paddleOffset, paddleWidth, paddleHeight);

    }, 1000/frames);

    canvas.addEventListener('mousemove', mouseCoords, false);
  };

  let close = document.querySelector('.close');
  let btnSaveResult = document.querySelector('#btnSaveResult');
  let btnStartAgain = document.querySelector('#btnStartAgain');
  let nameOfGamer = document.querySelector('#nameOfGamer');
  btnStartAgain.addEventListener('click', function() {
    window.location.reload()
  });


  btnSaveResult.addEventListener('click', function() {
    if(resultFinish > 4) {
       var wrpRecords = document.querySelector('.wrpRecords');
      let wrpResultItem = document.createElement('div');
      wrpResultItem.className = "wrpRecordsItem";
      wrpRecords.append(wrpResultItem);

      let paragSaveResult = document.createElement('p');

      let paragSaveName = document.createElement('p');

      storage.data = JSON.stringify({ //обращаемся к хранению данных и присваиваем новый json объект преобразованный в строку
        resultOfGame: resultFinish, //добавляем соответсвующим значениям значение инпутов
        name: nameOfGamer.value
      });

      var data = JSON.parse(storage.data || '{}');
      paragSaveResult.innerHTML = data.name || ''; //присваеваем инпутам значения из сохраненного объекта
      paragSaveName.innerHTML = data.resultOfGame || '';

      // paragSaveResult.innerHTML = resultFinish;
      wrpResultItem.append(paragSaveResult);

      // paragSaveName.innerHTML = nameOfGamer.value;
      wrpResultItem.append(paragSaveName);
    // Отправить resultFinish и nameOfGamer.value в бд
    var data = {resultOfGame:[], name:[]};
      var stored = localStorage.getItem(canvas);
      if (stored) {
        data = JSON.parse(stored);
      }
    }
  });

}, false);

window.localStorage.setItem('login', 'admin')
console.log(window.localStorage.getItem('login'))
