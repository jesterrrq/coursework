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
	let url = `http://localhost/myserver/`
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
	//const forms = document.querySelectorAll('#form_reg')
	const btn_reg = document.querySelector('#btn_reg')
	btn_reg.addEventListener('click', event => {
		// валидация элементов

		const exp = /[a-z]/
		const nickname = document.querySelector('#nickname').value
		const pass = document.querySelector('#exampleInputPassword1').value

		d = { nickname: nickname, password: password}
		if (exp.test(nickname) && exp.test(pass)) {
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


 
//корзина
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Добавление товара
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const product = e.target.closest('.product');
      const item = {
        id: product.dataset.id,
        name: product.dataset.name,
        price: +product.dataset.price,
        img: product.querySelector('img').src
      };
      
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
      
      // Визуальная обратная связь
      product.classList.add('added');
      setTimeout(() => product.classList.remove('added'), 300);
    });
  });
  
  // Обновление отображения корзины
  function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    
    if (cart.length === 0) {
      cartItems.innerHTML = '<p style="color:#777">Корзина пуста</p>';
      totalEl.textContent = '0';
      return;
    }
    
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.img}" alt="${item.name}" width="40">
        <span>${item.name}</span>
        <b>${item.price} ₽</b>
        <button class="remove-btn" data-id="${item.id}">×</button>
      </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalEl.textContent = total.toLocaleString('ru-RU');
  }
  
  // Очистка корзины
  document.querySelector('.clear-btn').addEventListener('click', () => {
    localStorage.removeItem('cart');
    cart.length = 0;
    updateCart();
  });
  
  updateCart(); // инициализация
});