var but = document.getElementById('myButton');
let wrapper = document.getElementById('wrapperDiv');
var count = 1;
// var width = Math.floor(Math.random()*200)+2;
// var height = Math.floor(Math.random()*200)+2;
but.addEventListener('click', function(){
        let div = document.createElement('div');
        var rect = wrapper.getBoundingClientRect();
        div.className = "randomDiv";
        wrapper.append(div);
        div.style.background = 'rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')';
        div.draggable='true';
        div.style.zIndex = 1000;

        var div_height = getRandomInt(20, 100);
        var div_width = getRandomInt(20, 100);
        var div_top = getRandomInt(10, 490);
        var div_left = getRandomInt(10, 590);
        var div_radius = getRandomInt(1, 20);


        div.style.width = div_width + 'px';
        div.style.height = div_height + 'px';
        div.style.top = div_top + 'px';
        div.style.left = div_left + 'px';
        div.borderRadius = div_radius + 'px';

        div.addEventListener('click', function() {
            if(div.classList.contains('borderDiv')) {
                div.classList.remove('borderDiv');
            } else {
                div.classList.add('borderDiv');
            }
        })
        document.addEventListener('keyup', function(e) {
            if(div.classList.contains('borderDiv')) {
                const rule = e.target.dataset.rule;
                div.style[rule] = e.target.value;
            }
           
        })
      

        div.onmousedown = function(e) {
            div.style.position = 'absolute';
            moveAt(e);
            // document.body.appendChild(div);

            div.style.zIndex = 1000;
            
            function moveAt(e) {
                var rect = wrapper.getBoundingClientRect();
                var div_rect = div.getBoundingClientRect();

                var new_left = e.pageX - div.offsetWidth / 2;
                var new_top = e.pageY - div.offsetHeight / 2;

                if (new_left < rect.left + 10) {
                    new_left = rect.left + 10;
                }

                if (new_top < rect.top + 10) {
                    new_top = rect.top + 10;
                }

                if (new_top + div_rect.height > rect.bottom - 10) {
                    new_top = rect.bottom - div_rect.height - 10;
                }

                if (new_left + div_rect.width > rect.right - 10) {
                    new_left = rect.right - div_rect.width - 10;
                }


                div.style.left = new_left + 'px';
                div.style.top = new_top + 'px';              
            }

            document.onmousemove = function(e) {
                moveAt(e);
            }

            div.onmouseup = function() {
                document.onmousemove = null;
                div.onmouseup = null;
            }

            div.ondragstart = function() {
            return false;
            };
        }
   
});


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 1. Выяснить позицию границы допустимой области
// 2. Выяснить позицию границ передвигаемого элемента
// 3. Сравнить позицию левой границы у зоны с позициией левой границы (стороны) элемента
// 373 зона < 383 элем == true - значит внутри, иначе снаружи
// то задаем позицию элемента в соответсвии с границей, которой мы коснулись 



