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

async function fetchData(nickname, password) {
	let url = `http://localhost//?nickname=${nickname}&password=${password}`
	let response = await fetch(url, {
		method: 'GET',
		headers: { Accept: 'application/json' },
	})

}

function get_data_form() {

	const btn_reg = document.querySelector('#btn_reg')
	btn_reg.addEventListener('click', event => {


		const exp = /[a-z]/
		const nickname = document.querySelector('#nickname').value
		const password = document.querySelector('#exampleInputPassword1').value

		d = { nickname: nickname }
		if (exp.reg(nickname) && exp.reg(password)) {
			console.log('Истино')

			fetchData(nickname, password)
		} else {
			console.log('Ложно')
		}

		event.preventDefault()
	})
}

document.addEventListener('DOMContentLoaded', function () {
	get_data_form()
})


