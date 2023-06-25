// Retrieve active products from localStorage, or set it to an empty array
let activeProducts = JSON.parse(localStorage.getItem('activeProducts')) || [];

// Function to display all products
function displayAllProducts() {
    const productList = document.getElementById('product-list');

    // Clearing existing content
    productList.innerHTML = '';

    // Loop through all products
    AllProducts.forEach(product => {
        const item = document.createElement('div');
        item.className = 'product-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = ActiveProducts.some(activeProduct => activeProduct.id === product.id); // Check if product is present in ActiveProducts
        checkbox.addEventListener('change', () => {
            toggleProductActiveState(product.id, checkbox.checked);
        });
        item.appendChild(checkbox);

        const label = document.createElement('label');
        label.textContent = product.name;
        item.appendChild(label);

        productList.appendChild(item);
    });
}

// Function to toggle the active state of a product
function toggleProductActiveState(productId, isActive) {
    if (isActive) {
        // Add the product to the active products array
        const product = AllProducts.find(product => product.id === productId);
        activeProducts.push(product);
    } else {
        // Remove the product from the active products array
        const index = activeProducts.findIndex(product => product.id === productId);
        if (index !== -1) {
            activeProducts.splice(index, 1);
        }
    }

    // Save the updated active products array to localStorage
    localStorage.setItem('activeProducts', JSON.stringify(activeProducts));
}

// Event listener for the product form submission
const productForm = document.getElementById('product-form');
productForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle the form submission, save the changes, or perform any desired action
    console.log(activeProducts);
});

// Display all products
displayAllProducts();