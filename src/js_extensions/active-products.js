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

        const label = document.createElement('label');
        label.textContent = product.name;
        item.appendChild(label);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = ActiveProducts.some(activeProduct => activeProduct.id === product.id); // Check if product is present in ActiveProducts
        checkbox.addEventListener('change', () => {
            toggleProductActiveState(product.id, checkbox.checked);
        });
        item.appendChild(checkbox);

        productList.appendChild(item);
    });
}

// Function to toggle the active state of a product
function toggleProductActiveState(productId, isActive) {
    const productIndex = ActiveProducts.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
        if (isActive) {
            // Change the status to 'active' in ActiveProducts
            ActiveProducts[productIndex].status = 'active';
            // Find the corresponding product in AllProducts and add it to activeProducts
            const product = AllProducts.find(product => product.id === productId);
            activeProducts.push(product);
        } else {
            // Change the status to 'disabled' in ActiveProducts
            ActiveProducts[productIndex].status = 'disabled';
            // Remove the corresponding product from activeProducts
            const index = activeProducts.findIndex(product => product.id === productId);
            if (index !== -1) {
                activeProducts.splice(index, 1);
            }
        }

        // Save the updated active products array to localStorage
        localStorage.setItem('ActiveProducts', JSON.stringify(ActiveProducts));
        // Save the updated activeProducts array to localStorage
        localStorage.setItem('activeProducts', JSON.stringify(activeProducts));
    }
}

// Display all products
displayAllProducts();
