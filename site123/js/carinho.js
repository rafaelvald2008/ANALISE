let prices = {
    1: 100,
    2: 150
};

function increaseQuantity(itemId) {
    let quantityInput = document.getElementById(`quantity-${itemId}`);
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
    updateTotal();
}

function decreaseQuantity(itemId) {
    let quantityInput = document.getElementById(`quantity-${itemId}`);
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        updateTotal();
    }
}

function updateTotal() {
    let total = 0;
    for (let id in prices) {
        let quantity = parseInt(document.getElementById(`quantity-${id}`).value);
        total += prices[id] * quantity;
    }
    document.getElementById('total-price').textContent = total.toFixed(2);
}