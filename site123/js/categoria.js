function filterProducts() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
  
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      if (selectedCategory === 'todos') {
        product.style.display = 'block';  // Exibe todos os produtos
      } else {
        if (product.classList.contains(selectedCategory)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      }
    });
  }
  