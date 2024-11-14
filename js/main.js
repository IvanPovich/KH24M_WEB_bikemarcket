let cartCount = 0;

const addToCartButtons = document.querySelectorAll('.product-card__button');
const cartCountElement = document.getElementById('cart-count');

function addToCart() {
    cartCount++;
    cartCountElement.textContent = cartCount;

    showNotification("Товар додано в кошик!");
}

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}
