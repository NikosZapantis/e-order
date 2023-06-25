function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';   // Clearing existing cart items

    let listItemFormat = '';
    let ItemCounter = 0;

    cartItems.forEach(item => {
        // const listItem = document.createElement('li');
        // const itemText = document.createElement('h4');
        // itemText.textContent = `${item.name} | Quantity: ${item.quantity}`;
        // listItem.appendChild(itemText);
        // cartItemsList.appendChild(listItem);
        if(ItemCounter % 4 === 0) {
            listItemFormat += '<br>';
        }
        listItemFormat += `<li>${item.name} | Quantity: ${item.quantity}</li>`;
        ItemCounter++;
    });

    cartItemsList.innerHTML = listItemFormat;
}

//Converting Cart List into excel file
function convertCartListToExcel() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const fileName = `Order_${day}-${month}-${year}.csv`;

    const csvContent = `Product,Quantity\n` + cartItems.map(item => `${item.name},${item.quantity}`).join('\n');
    const excelContent = `data:text/csv;charset=utf-8,\uFEFF${encodeURIComponent(csvContent)}`;

    const downloadLink = createDownloadLink(excelContent, fileName);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

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

// Calling displayCartItems() when the my-cart.html loads
window.addEventListener('DOMContentLoaded', displayCartItems);