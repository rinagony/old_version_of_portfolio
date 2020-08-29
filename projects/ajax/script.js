var content = document.getElementById('content');
var btnGet = document.getElementById('btnGet');
btnGet.addEventListener('click', function() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {  // 4 means loaded
            var json = xhr.response;
            for(i=0; i<json.length; i++) {
                var newItem = document.createElement("LI");
                newItem.classList.add("listItem");
                newItem.innerHTML = json[i].name;
                content.appendChild(newItem);
            }
        }
      }

    xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
    xhr.responseType = 'json';
    xhr.send();
    

});
  let inputMain = document.getElementById('searchInput');
    let wrpSearch = document.getElementById('wrpSearch');
    inputMain.oninput = function() {
        let val = this.value.toLowerCase().trim();
        if(val != ' ') {
            let listItem = content.querySelectorAll('.listItem');
            listItem.forEach(function(elem) {
                if(elem.innerText.toLowerCase().search(val) == -1) {
                    elem.classList.add('hide');
                } else {
                    elem.classList.remove('hide');
                }
            });
        }
    }