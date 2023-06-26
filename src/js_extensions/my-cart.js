function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';   // Clearing existing cart items

    let listItemFormat = '';
    let ItemCounter = 0;

    // Sort the cart items based on their IDs
    const sortedCartItems = cartItems.sort((a, b) => a.id - b.id);

    sortedCartItems.forEach(item => {
        // Find the corresponding product based on the item's ID
        const product = AllProducts.find(product => product.id === item.id);

        if (product) {
            if (ItemCounter % 4 === 0) {
                listItemFormat += '<br>';
            }

            // Display the product with ID and quantity
            listItemFormat += `<li>${product.name} | Quantity: ${item.quantity}</li>`;
            ItemCounter++;
        }
    });

    cartItemsList.innerHTML = listItemFormat;

    //Calling calculateCartItems to update the numbers
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

    // Creating the filanem based on user input or providing the default (fileName)
    const FinalFileName = userProvidedFileName.trim() !== '' ? userProvidedFileName : DefaultFileName;
    
    // Create an HTML table with borders
    let htmlContent = '<table border="1">';
    htmlContent += '<tr><th>Product</th><th>Quantity</th></tr>';
    cartItems.forEach((item) => {
        htmlContent += `<tr><td>${item.name}</td><td>${item.quantity}</td></tr>`;
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
            'text/html': new Blob([htmlContent], {type: 'text/html'})
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

// //Converting Cart List into excel file {Without Borders}
// function convertCartListToExcel() {
//     const currentDate = new Date();
//     const day = String(currentDate.getDate()).padStart(2, '0');
//     const month = String(currentDate.getMonth() + 1).padStart(2, '0');
//     const year = currentDate.getFullYear();
//     const fileName = `Order_${day}-${month}-${year}.csv`;

//     const csvContent = `Product,Quantity\n` + cartItems.map(item => `${item.name},${item.quantity}`).join('\n');
//     const excelContent = `data:text/csv;charset=utf-8,\uFEFF${encodeURIComponent(csvContent)}`;

//     const downloadLink = createDownloadLink(excelContent, fileName);
//     downloadLink.style.display = 'none';
//     document.body.appendChild(downloadLink);

//     downloadLink.click();

//     // Show download popup
//     const downloadPopup = document.getElementById('downloadPopup');
//     downloadPopup.style.display = 'flex';
//     setTimeout(() => {
//         downloadPopup.style.display = 'none';
//     }, 6000);
// }

function createDownloadLink(content, filename) {    //Creating download link
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