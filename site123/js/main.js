// /client/js/main.js
function filterProducts() {
    const category = document.querySelector('input[name="category"]:checked').value;
    const productList = document.querySelector('.products');

    // Aqui você irá fazer uma requisição para o servidor para pegar os produtos com a categoria selecionada
    fetch(`/api/products?category=${category}`)
        .then(response => response.json())
        .then(products => {
            productList.innerHTML = ''; // Limpa a lista de produtos

            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'product-item';
                productItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Preço: R$${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                `;
                productList.appendChild(productItem);
            });
        });
}
