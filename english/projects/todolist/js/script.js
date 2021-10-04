const input = document.getElementById('inputAdd');
const button = document.getElementById('buttonAdd');
const wrpAdded = document.getElementById('wrpAdded');
const inputDate = document.getElementById('meeting-time');
const wrpDelete = document.getElementById('wrpDelete');
const delBtn = document.getElementById('delBtn');
const createBtn = document.getElementById('createBtn');
button.addEventListener('click', function() {
	if(input.value.length <= 0) {
		false
	}
	if(input.value.length >0) {
		var inputValue = input.value;
		var div = document.createElement('div')
		var added = document.createElement('p');
		var icon = document.createElement('i');
		var iconDone = document.createElement('i');
		var dateInp = document.createElement('p');
		div.className = "wrpAddedItem";
		added.className = "addedItem";
		dateInp.className = "addedDate";
		icon.className = "fas fa-window-close";
		iconDone.className = "fas fa-check-square"
		added.innerHTML = inputValue +'<br>';
		added.style.display = 'block';
		dateInp.innerHTML = inputDate.value;
		wrpAdded.append(div);
		div.append(added);
		div.append(icon);
		div.insertBefore(iconDone, added);
		div.insertBefore(dateInp, icon);

		setTimeout(function(){input.value=''}, 10);

		icon.addEventListener('click', function() {
			var blocks = this.parentNode;
			wrpDelete.appendChild(blocks);
			div.classList.remove('isDone');
			blocks.classList.add('hiddenBlock');
			delBtn.addEventListener('click', function() {
				
				if(blocks.classList.contains('hiddenBlock')) {
					createBtn.classList.remove('hiddenBlock');
					blocks.classList.remove('hiddenBlock');
					blocks.style.border = '4px solid #fcc2c2';
					blocks.style.marginTop = '15px';
					iconDone.addEventListener('click', function() {
						createBtn.addEventListener('click', function() {
							wrpAdded.appendChild(blocks);
							blocks.style.border = '0.6px solid #326eb3';
							div.classList.remove('isDone');
						})
					})

				}
				else {
					blocks.classList.add('hiddenBlock');
					createBtn.classList.add('hiddenBlock');
				}
			})

		});

		

		iconDone.addEventListener('click', function() {
			if(div.classList.contains('isDone')) {
				div.classList.remove('isDone');
			} else {
				div.classList.add('isDone');
			}
		})

	}
});


VK.init({
	apiId: 7352954
});

function auth() {
	return new Promise((resolve, reject) => {
		VK.Auth.login(data => {
		if(data.session) {
			resolve();
		} else {
			reject(new Error('Не удалось авторизоваться'));
		}
	}, 2);
	});
}

function callAPI(method, params) {
	params.v = '5.69';
	return new Promise((resolve, reject) => {
		VK.api(method, params, (data) => {
			if(data.error) {
				reject(data.error);
			} else {
				resolve(data.response);
			}
		});
	})
}

(async () => {
	await auth()
	const [user] = await callAPI('users.get', {fields: 'photo_100'});
		const headerInfo = document.getElementById('headerInfo');
		headerInfo.textContent = `Приветствую, ${user.first_name} ${user.last_name}`;
})();





