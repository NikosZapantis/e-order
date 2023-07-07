//Category array
const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
    { id: 5, name: 'Category 5' }
];

//All Products array
const AllProducts = [
    { id: 1, name: 'Product 1', price: 10, quantity: 0, categoryId: 1, status: 'active' },
    { id: 2, name: 'Product 2', price: 20, quantity: 0, categoryId: 2, status: 'active' },
    { id: 3, name: 'Product 3', price: 30, quantity: 0, categoryId: 1, status: 'active' },
    { id: 4, name: 'Product 4', price: 15, quantity: 0, categoryId: 3, status: 'active' },
    { id: 5, name: 'Product 5', price: 25, quantity: 0, categoryId: 5, status: 'active' },
    { id: 6, name: 'Product 6', price: 10, quantity: 0, categoryId: 1, status: 'active' },
    { id: 7, name: 'Product 7', price: 20, quantity: 0, categoryId: 2, status: 'active' },
    { id: 8, name: 'Product 8', price: 30, quantity: 0, categoryId: 1, status: 'active' },
    { id: 9, name: 'Product 9', price: 15, quantity: 0, categoryId: 3, status: 'active' },
    { id: 10, name: 'Product 10', price: 25, quantity: 0, categoryId: 5, status: 'active' },
    { id: 11, name: 'Product 11', price: 10, quantity: 0, categoryId: 1, status: 'active' },
    { id: 12, name: 'Product 12', price: 20, quantity: 0, categoryId: 2, status: 'active' },
    { id: 13, name: 'Product 13', price: 30, quantity: 0, categoryId: 1, status: 'active' },
    { id: 14, name: 'Product 14', price: 15, quantity: 0, categoryId: 3, status: 'active' },
    { id: 15, name: 'Product 15', price: 25, quantity: 0, categoryId: 5, status: 'active' },
    { id: 16, name: 'Product 16', price: 25, quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 17, name: 'Product 17', price: 10, quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 18, name: 'Product 18', price: 20, quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 19, name: 'Product 19', price: 30, quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 20, name: 'Product 20', price: 15, quantity: 0, categoryId: 3, status: 'disabled' },
    { id: 21, name: 'Product 21', price: 25, quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 22, name: 'Product 22', price: 25, quantity: 0, categoryId: 5, status: 'disabled' },
    { id: 23, name: 'Product 23', price: 10, quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 24, name: 'Product 24', price: 20, quantity: 0, categoryId: 2, status: 'disabled' },
    { id: 25, name: 'Product 25', price: 30, quantity: 0, categoryId: 1, status: 'disabled' },
    { id: 26, name: 'Product 26', price: 15, quantity: 0, categoryId: 3, status: 'disabled' }
];

// Check if the AllProducts array exists in localStorage
let AllProductsArray = JSON.parse(localStorage.getItem('AllProducts'));

// If AllProducts is null or undefined, initialize it with the products from the constant
if (!AllProductsArray) {
    AllProductsArray = [...AllProducts];
    localStorage.setItem('AllProducts', JSON.stringify(AllProducts));
}

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

// Function to handle category focus
function handleCategoryFocus(event) {
    const clickedButton = event.target;

    // Check if a category button was clicked
    if (clickedButton.tagName === 'BUTTON') {
        const categoryId = parseInt(clickedButton.dataset.categoryId);

        // // Filter and display products by category
        // filterProducts(categoryId);

        // Add 'selected' class to the clicked category button
        const categoryButtons = document.querySelectorAll('#category-list button');
        categoryButtons.forEach(button => {
        if (button === clickedButton) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
        });
    }
}
 
// Add event listener to the category list container so I can declare which one to focus
const categoryList = document.getElementById('category-list');
categoryList.addEventListener('click', handleCategoryFocus);

// Function to filter and display products by category
function filterProducts(categoryId) {
    const productList = document.getElementById('product-list');

    // Clearing existing content
    productList.innerHTML = '';

    // Checking if AllProducts array is empty in localStorage
    const currentlyAllProducts = JSON.parse(localStorage.getItem('AllProducts'));

    if (currentlyAllProducts && currentlyAllProducts.length > 0) {
        // Filtering products by category and status 'active'
        const filteredProducts = currentlyAllProducts.filter(product => product.categoryId === categoryId && product.status === 'active');

        // Loop through filtered products and create HTML elements
        filteredProducts.forEach(product => {
            const item = document.createElement('div');
            item.innerHTML = `
                <h3>${product.name} 
                    <button class="quantityBtnRemove" onclick="removeFromCart(${product.id})">-</button>
                    <span class="quantityCounter" id="quantity-${product.id}">${getProductQuantity(product.id)}</span> 
                    <button class="quantityBtnAdd" onclick="addToCart(${product.id})">+</button>
                </h3>
            `;
            productList.appendChild(item);
        });
    } else {
        // Filtering products from the AllProducts constant by category and status 'active'
        const filteredProducts = AllProducts.filter(product => product.categoryId === categoryId && product.status === 'active');

        // Loop through filtered products and create HTML elements
        filteredProducts.forEach(product => {
            const item = document.createElement('div');
            item.innerHTML = `
                <h3>${product.name} 
                    <button class="quantityBtnRemove" onclick="removeFromCart(${product.id})">-</button>
                    <span class="quantityCounter" id="quantity-${product.id}">${getProductQuantity(product.id)}</span> 
                    <button class="quantityBtnAdd" onclick="addToCart(${product.id})">+</button>
                </h3>
            `;
            productList.appendChild(item);
        });
    }
}

// Function to add a product to the cart
function addToCart(productId) {
    const selectedProduct = AllProducts.find(product => product.id === productId);

    // Checking if the product is already in the cart
    const existingCartItem = cartItems.find(item => item.id === selectedProduct.id);

    if (!existingCartItem) {
        // If the product does not exist in the cart, add it with a quantity of 1
        cartItems.push({ ...selectedProduct, quantity: 1 });

        showNotification(`${selectedProduct.name} added to the cart.`, true);

        //Adding the shake-animation class to the shopping cart
        const cartSection = document.getElementById('my-cart');
        cartSection.classList.add('CartShake-animation');

        //Removing the shake-animation class after 0.4seconds
        setTimeout(() => {
            cartSection.classList.remove('CartShake-animation');
        }, 800);
    } else {
        // If the product already exists in the cart, increase its quantity by 1
        existingCartItem.quantity++;
    }

    // Saving the updated cartItems array to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Updating the quantity displayed in the HTML
    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
        quantityElement.textContent = getProductQuantity(productId);
    }

    // Updating cart count
    UpdateCartCount();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    const existingCartItem = cartItems.find(item => item.id === productId);

    if (existingCartItem) {
        // Decrease the quantity by 1
        existingCartItem.quantity--;

        if (existingCartItem.quantity === 0) {
            // If the quantity reaches 0, remove the product from the cart
            cartItems = cartItems.filter(item => item.id !== productId);

            const selectedProduct = AllProducts.find(product => product.id === productId);
            showNotification(`${selectedProduct.name} removed from the cart.`, false);

            //Adding the shake-animation class to the shopping cart
            const cartSection = document.getElementById('my-cart');
            cartSection.classList.add('CartShake-animation');

            //Removing the shake-animation class after 0.4seconds
            setTimeout(() => {
                cartSection.classList.remove('CartShake-animation');
            }, 800);
        }
    }

    // Saving the updated cartItems array to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Updating the quantity displayed in the HTML
    const quantityElement = document.getElementById(`quantity-${productId}`);
    if (quantityElement) {
        quantityElement.textContent = getProductQuantity(productId);
    }

    // Updating cart count
    UpdateCartCount();
}

// Function to show notification
function showNotification(message, isAdd) {
    const notificationElement = document.getElementById('notification');

    // Creating a new span element for the notification
    const notification = document.createElement('span');
    notification.textContent = message;

    // Adding success or failure class based on success parameter
    if (isAdd) {
        notification.classList.add('added');
        notification.innerHTML = '&#10004; ' + notification.innerHTML; // Add ✔ symbol
    } else {
        notification.classList.add('removed');
        notification.innerHTML = '&#10008; ' + notification.innerHTML; // Add ❌ symbol
    }


    // Appending the notification to the notification element
    notificationElement.appendChild(notification);

    // Automatically remove the notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3500);
}

// Function to view the cart page
function viewCart() {
    window.location.href = '/src/html_extensions/my-cart.html';
}

// Function that user can select the active products
function viewActiveProducts() {
    window.location.href = '/src/html_extensions/active-products.html';
}

// Function to redirect to the main page if the user is on the my-cart page
function redirectToMainPage() {
    window.location.href = '../../index.html';
}

// Function to clear cart
function clearCart() {
    localStorage.removeItem('cartItems');
    cartItems = [];
    location.reload();
}

// Function to update the cart-count
function UpdateCartCount() {
    const cartCountElement = document.getElementById('cart-count');

    if(cartCountElement) {
        const totalProudcts = cartItems.length;
        cartCountElement.textContent = totalProudcts;
    }
}

// Displaying the categories
displayCategories();

// Updating cart count
UpdateCartCount();
