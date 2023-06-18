//Category array
const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
    { id: 5, name: 'Category 5' },
];

//Products array
const products = [
    { id: 1, name: 'Product 1', price: 10, categoryId: 1 },
    { id: 2, name: 'Product 2', price: 20, categoryId: 2 },
    { id: 3, name: 'Product 3', price: 30, categoryId: 1 },
    { id: 4, name: 'Product 4', price: 15, categoryId: 3 },
    { id: 5, name: 'Product 5', price: 25, categoryId: 5 },
];

function displayCategories() {
    const categoryList = document.getElementById('category-list');

    // Clear existing content
    categoryList.innerHTML = '';

    // Loop through categories and create buttons
    categories.forEach(category => {
        const button = document.createElement('button');
        button.innerText = category.name;
        button.addEventListener('click', () => filterProducts(category.id));
        categoryList.appendChild(button);
    });
}

// Function to filter and display products by category
function filterProducts(categoryId) {
    const productList = document.getElementById('product-list');

    // Clear existing content
    productList.innerHTML = '';

    // Filter products by category
    const filteredProducts = products.filter(product => product.categoryId === categoryId);

    // Loop through filtered products and create HTML elements
    filteredProducts.forEach(product => {
        const item = document.createElement('div');
        item.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(item);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);

    // Add the selected product to the cart
    cartItems.push(selectedProduct);
}

// Function to view the cart page
function viewCart() {
    // Redirect to the cart page where you can display the cart items
    // window.location.href = 'cart.html';
}

// Display the categories
displayCategories();