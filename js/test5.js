// Загружаем товары при загрузке страницы
document.addEventListener('DOMContentLoaded', loadProducts);

let cart = [];
const url = `http://localhost/myserver/get.php`;

async function loadProducts() {
    const container = document.getElementById('product-list');
            
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });
                
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
                
        const result = await response.json();
                
        if (!result.success) throw new Error(result.error || 'Ошибка сервера');
                
        renderProducts(result.data, container);
                
    } catch (error) {
        console.error('❌ Ошибка:', error);
        container.innerHTML = `<p class="error">Не удалось загрузить товары: ${error.message}</p>`;
    }
}

function renderProducts(products, container) {
    if (!products || products.length === 0) {
        container.innerHTML = '<p class="empty">📭 Товары не найдены</p>';
        return;
    }
            
    container.innerHTML = products.map(product => `
        <article class="product" data-id="${product.id}">
            <img src="${escapeHtml(product.link)}" alt="${escapeHtml(product.name)}">
            <h3>${escapeHtml(product.name)}</h3>
            <p class="price">${Number(product.price).toLocaleString('ru-RU')} ₽</p>
            <button class="button add-to-cart" onclick="addToCart(${product.id}, '${escapeHtml(product.name)}', ${product.price})">
                Купить
            </button>
        </article>
    `).join('');
}

// защита от взлома
function escapeHtml(text) {
    if (text === null || text === undefined) return '';
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

        // Корзина
function addToCart(id, name, price) {
    cart.push({ id, name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
            
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Корзина пуста</p>';
        cartTotal.textContent = '0';
        return;
    }
            
    cartItems.innerHTML = cart.map((item, i) => 
        `<div>${item.name} — ${item.price} ₽ <small style="color:#e74c3c;cursor:pointer;" onclick="removeFromCart(${i})">✕</small></div>`
    ).join('');
            
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toLocaleString('ru-RU');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}