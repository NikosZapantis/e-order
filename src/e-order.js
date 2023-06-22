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
    { id: 1, name: 'Product 1', price: 10, quantity: 0, categoryId: 1 },
    { id: 2, name: 'Product 2', price: 20, quantity: 0, categoryId: 2 },
    { id: 3, name: 'Product 3', price: 30, quantity: 0, categoryId: 1 },
    { id: 4, name: 'Product 4', price: 15, quantity: 0, categoryId: 3 },
    { id: 5, name: 'Product 5', price: 25, quantity: 0, categoryId: 5 },
];

// Initializing cartItems array from localStorage, or set it to an empty array
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function that creates the categories and displays them
function displayCategories() {
    const categoryList = document.getElementById('category-list');

    // Clearing existing content
    categoryList.innerHTML = '';

    // Loop through categories and create buttons
    categories.forEach(category => {
        const button = document.createElement('button');
        button.innerText = category.name;
        button.addEventListener('click', () => filterProducts(category.id));
        categoryList.appendChild(button);
    });
}

// Function to retrieve the quantity of a specific product from the cart
function getProductQuantity(productId) {
    const selectedProduct = cartItems.find(item => item.id === productId);
    return selectedProduct ? selectedProduct.quantity : 0;
}

// Function to filter and display products by category
function filterProducts(categoryId) {
    const productList = document.getElementById('product-list');

    // Clearing existing content
    productList.innerHTML = '';

    // Filtering products by category
    const filteredProducts = products.filter(product => product.categoryId === categoryId);

    // Loop through filtered products and create HTML elements
    filteredProducts.forEach(product => {
        const item = document.createElement('div');
        item.innerHTML = `
        <h3>${product.name} (Price: $${product.price}) / 
            <button class="quantity-btn" onclick="addToCart(${product.id})">+</button> 
            <span id="quantity-${product.id}">${getProductQuantity(product.id)}</span> 
            <button class="quantity-btn" onclick="removeFromCart(${product.id})">-</button>
        </h3>
        `;
        productList.appendChild(item);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);

    // Checking if the product is already in the cart
    const isInCart = cartItems.some(item => item.id === selectedProduct.id);

    if (!isInCart) {
        // Increase the quantity by 1
        selectedProduct.quantity++;

        // Push the selected product to the cart
        cartItems.push(selectedProduct);
    } else {
        // If the product already exists in the cart, just increase the quantity
        selectedProduct.quantity++;
    }

    // Saving the updated cartItems array to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Updating the quantity displayed in the HTML
    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
        quantityElement.textContent = selectedProduct.quantity;
    }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);

    // Finding the index of the selected product in the cart
    const cartIndex = cartItems.findIndex(item => item.id === selectedProduct.id);

    if (cartIndex !== -1) {
        // Decrease the quantity by 1
        selectedProduct.quantity--;

        if (selectedProduct.quantity === 0) {
        // Remove the product from the cart if quantity reaches 0
        cartItems.splice(cartIndex, 1);
        }
    }

    // Saving the updated cartItems array to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Updating the quantity displayed in the HTML
    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
        quantityElement.textContent = selectedProduct.quantity;
    }
}

// Function to view the cart page
function viewCart() {
    window.location.href = 'my-cart.html';
}

// Function to redirect to the main page if the user is on the my-cart page
function redirectToMainPage() {
    window.location.href = 'index.html';
}

// Displaying the categories
displayCategories();
