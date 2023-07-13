// Converting All items into a list in excel
function convertCartToExcelList() {
  // Creating an HTML table with borders
  let htmlContent = '<table border="1">';

  // Add table headers
  htmlContent += '<tr><th>Product</th><th>Category</th></tr>';

  // Iterate over each product
  AllProducts.forEach(product => {
    const category = categories.find(cat => cat.id === product.categoryId);
    if (category) {
      // Add a table row with the product name and category name
      htmlContent += `<tr><td>${product.name}</td><th>${category.name}</th></tr>`;
    }
  });

  htmlContent += '</table>';

  // Create a Blob with the HTML content
  const blob = new Blob([htmlContent], { type: 'application/vnd.ms-excel' });

  // Create the download link
  const url = URL.createObjectURL(blob);
  const downloadLink = createDownloadLink(url, 'ProductList.xls');
  downloadLink.style.display = 'none';
  document.body.appendChild(downloadLink);

  downloadLink.click();
}