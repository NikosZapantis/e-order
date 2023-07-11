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