// Dados simulados
let totalVendas = 0;
let produtosVendidos = 0;
let totalEstoque = 0;

const salesTableBody = document.getElementById('sales-table-body');
const totalSalesElem = document.getElementById('total-sales');
const productsSoldElem = document.getElementById('products-sold');
const totalStockElem = document.getElementById('total-stock');

// Função para formatar número como moeda
function formatCurrency(value) {
    return 'R$ ' + value.toFixed(2).replace('.', ',');
}

// Função para adicionar um produto e atualizar o estoque
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtém os valores do formulário
    const nomeProduto = document.getElementById('product-name').value;
    const precoProduto = parseFloat(document.getElementById('product-price').value);
    const quantidadeEstoque = parseInt(document.getElementById('product-stock').value);
    const categoriaProduto = document.getElementById('product-category').value;

    // Atualiza o estoque total
    totalEstoque += quantidadeEstoque;
    totalStockElem.textContent = totalEstoque + ' unidades';

    alert('Produto "' + nomeProduto + '" adicionado com sucesso!');
    
    // Limpa o formulário
    document.getElementById('product-form').reset();
});

// Função para registrar uma venda (simulada)
function registrarVenda(produto, quantidade, valorTotal) {
    const dataVenda = new Date().toLocaleDateString();

    // Cria uma nova linha na tabela de vendas
    const novaVenda = `
        <tr>
            <td>${produto}</td>
            <td>${dataVenda}</td>
            <td>${quantidade}</td>
            <td>${formatCurrency(valorTotal)}</td>
        </tr>
    `;

    // Adiciona a linha ao corpo da tabela
    salesTableBody.innerHTML += novaVenda;

    // Atualiza as métricas
    totalVendas += valorTotal;
    produtosVendidos += quantidade;

    // Atualiza os elementos da página
    totalSalesElem.textContent = formatCurrency(totalVendas);
    productsSoldElem.textContent = produtosVendidos + ' unidades';
}

// Simulando vendas
registrarVenda('Produto A', 3, 300);
registrarVenda('Produto B', 5, 500);
