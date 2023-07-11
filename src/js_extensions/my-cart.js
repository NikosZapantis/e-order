function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clearing existing cart items

    let listItemFormat = '';
    let itemCounter = 0;

    // Check if the AllProducts array exists in localStorage and is not empty
    const storedAllProducts = JSON.parse(localStorage.getItem('AllProducts'));
    const isAllProductsEmpty = !storedAllProducts || storedAllProducts.length === 0;

    if (isAllProductsEmpty) {
        // If AllProducts is empty or not found in localStorage, use the AllProducts constant
        AllProducts.forEach(product => {
        // Check if the product is active and has a quantity greater than 0
        if (product.status === 'active' && product.quantity > 0) {
            if (itemCounter % 4 === 0) {
            listItemFormat += '<br>';
            }

            // Display the product with ID and quantity
            listItemFormat += `<li>${product.name} | <span class="gradient-text">Quantity: ${item.quantity}</span></li>`;
            itemCounter++;
        }
        });
    } else {
        // Sort the cart items based on their IDs
        const sortedCartItems = cartItems.sort((a, b) => a.id - b.id);

        sortedCartItems.forEach(item => {
        // Find the corresponding product based on the item's ID
        const product = storedAllProducts.find(
            product => product.id === item.id && product.status === 'active'
        );

        if (product) {
            if (itemCounter % 4 === 0) {
            listItemFormat += '<br>';
            }

            // Display the product with ID and quantity
            listItemFormat += `<li>${product.name} | <span class="gradient-text">Quantity: ${item.quantity}</span></li>`;
            itemCounter++;
        }
    });
}

cartItemsList.innerHTML = listItemFormat;

// Calling calculateCartItems to update the numbers
calculateCartItems();
}

//Converting Cart List into excel file {With Borders}
function convertCartListToExcel() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const DefaultFileName = `Order_${day}-${month}-${year}.xls`;

    // Getting the value from the custom file name input field
    const CustomFileNameInput = document.getElementById('CustomFileNameInput');
    const userProvidedFileName = CustomFileNameInput.value;

    // Creating the filename based on user input or providing the default (fileName)
    const FinalFileName = userProvidedFileName.trim() !== '' ? userProvidedFileName : DefaultFileName;

    // Get the products array from localStorage or use the constant if it's empty
    const storedAllProducts = JSON.parse(localStorage.getItem('AllProducts'));
    const allProducts = storedAllProducts && storedAllProducts.length > 0 ? storedAllProducts : AllProducts;

    // Filter the cart items for active products with quantities greater than 0
    const activeCartItems = cartItems.filter(item => {
        const product = allProducts.find(product => product.id === item.id && product.status === 'active');
        return product && item.quantity > 0;
    });

    // Create an HTML table with borders
    let htmlContent = '<table border="1">';
    htmlContent += '<tr><th>Προϊόν</th><th>Ποσότητα</th></tr>';
    activeCartItems.forEach(item => {
        htmlContent += `<tr><td>${item.name}</td><th>${item.quantity}</th></tr>`;
    });
    htmlContent += '</table>';

    // Create a Blob with the HTML content
    const blob = new Blob([htmlContent], { type: 'application/vnd.ms-excel' });

    // Create the download link
    const url = URL.createObjectURL(blob);
    const downloadLink = createDownloadLink(url, FinalFileName);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    // Auto-Copying the final border in the user's clipboard
    navigator.clipboard.write([
        new ClipboardItem({
            'text/html': new Blob([htmlContent], { type: 'text/html' })
        })
    ]);

    downloadLink.click();

    // Show download popup
    const downloadPopup = document.getElementById('downloadPopup');
    downloadPopup.style.display = 'flex';
    setTimeout(() => {
        downloadPopup.style.display = 'none';
    }, 6000);
}

//Creating download link
function createDownloadLink(content, filename) {
    const downloadLink = document.createElement('a');
    downloadLink.href = content;
    downloadLink.download = filename;
    return downloadLink;
}

//Function to display the total products and the unique ones
function calculateCartItems() {
    let totalProducts = 0;
    let uniqueProducts = new Set();

    //Calculating for all the items
    cartItems.forEach(item => {
        totalProducts += item.quantity;

        uniqueProducts.add(item.id);
    });

    //Displaying total products
    const totalProductsElement = document.getElementById('total-products');
    totalProductsElement.textContent = `Total Products: ${totalProducts}`;

    //Displaying unique products
    const uniqueProductsElement = document.getElementById('unique-products');
    uniqueProductsElement.textContent = `Unique Products: ${Array.from(uniqueProducts).length}`;
}

// Handling keydown events
function handleKeyDown(event) {
    if(event.key === "Enter") {
        convertCartListToExcel();
    }
}

// Adding event listener for the keydown on the CustomFileNameInput element
const CustomFileNameInput = document.getElementById('CustomFileNameInput');
CustomFileNameInput.addEventListener('keydown', handleKeyDown); 

// Calling displayCartItems() when the my-cart.html loads
window.addEventListener('DOMContentLoaded', displayCartItems);
