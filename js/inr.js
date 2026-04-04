//всплывающее окно
const openModalButton = document.getElementById('openModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalButton = document.getElementById('closeModal');
const cancelModalButton = document.getElementById('cancelModal');


function openModal() {
modalOverlay.classList.add('active');
document.body.style.overflow = 'hidden';
}


function closeModal() {
modalOverlay.classList.remove('active');
document.body.style.overflow = '';
}

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
cancelModalButton.addEventListener('click', closeModal);


modalOverlay.addEventListener('click', function(event) {
if (event.target === modalOverlay) {
closeModal();
}
});


document.addEventListener('keydown', function(event) {
if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
closeModal();
}
});


//добавление данных в бд

async function fetchData(d) {
	let url = `http://localhost/myserver/index.php`
	let response = await fetch(url, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams(d).toString(),
	})
}

function get_data_form() {
	// const forms = document.querySelectorAll('#form_reg')
	const btn_reg = document.querySelector('#btn_reg')
	btn_reg.addEventListener('click', event => {
		// валидация элементов

		const exp = /[a-z]/
		const nickname = document.querySelector('#nickname').value
		const password = document.querySelector('#exampleInputPassword1').value

		d = { nickname: nickname, password: password }
		if (exp.test(nickname) && exp.test(password)) {
			console.log('Истино')

			console.log(d)
			fetchData(d)
		} else {
			console.log('Ложно')
		}

		event.preventDefault()
	})
}

document.addEventListener('DOMContentLoaded', function () {
	get_data_form()
})




