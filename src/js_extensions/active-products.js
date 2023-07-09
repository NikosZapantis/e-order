// Initialize the ActiveProducts array
let ActiveProducts = [];

// Function to display all products
function displayAllProducts() {
    const currentlyAllProducts = JSON.parse(localStorage.getItem('AllProducts'));
    const productList = document.getElementById('product-list');

    // Clearing existing content
    productList.innerHTML = '';

    // Loop through all products
    currentlyAllProducts.forEach(product => {
        if (product.status === 'active') {
            const listItem = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = true; // Set the checkbox as checked for active products
            checkbox.addEventListener('change', () => {
                toggleProductActiveState(product.id, checkbox.checked);
            });
            listItem.appendChild(checkbox);

            const label = document.createElement('label');
            label.textContent = " " + product.name;
            listItem.appendChild(label);

            productList.appendChild(listItem);
        } else if (product.status === 'disabled') {
            const listItem = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = false; // Set the checkbox as unchecked for disabled products
            checkbox.addEventListener('change', () => {
                toggleProductActiveState(product.id, checkbox.checked);
            });
            listItem.appendChild(checkbox);

            const label = document.createElement('label');
            label.textContent = " " + product.name;
            listItem.appendChild(label);

            productList.appendChild(listItem);
        }
    });
}

// Function to toggle the active state of a product
function toggleProductActiveState(productId, isActive) {
    const currentlyAllProducts = JSON.parse(localStorage.getItem('AllProducts'));
    const productIndex = currentlyAllProducts.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
        if (isActive) {
            // Change the status to 'active' in currentlyAllProducts
            currentlyAllProducts[productIndex].status = 'active';

            // Find the specific product in currentlyAllProducts and add it to ActiveProducts
            const product = currentlyAllProducts.find(product => product.id === productId);
            ActiveProducts.push(product);
        } else {
            // Change the status to 'disabled' in currentlyAllProducts
            currentlyAllProducts[productIndex].status = 'disabled';

            // Remove the corresponding product from ActiveProducts
            const index = ActiveProducts.findIndex(product => product.id === productId);
            if (index !== -1) {
                ActiveProducts.splice(index, 1);
            }
        }

        // Save the updated currentlyAllProducts array to localStorage
        localStorage.setItem('AllProducts', JSON.stringify(currentlyAllProducts));

        // Refresh the displayed products
        displayAllProducts();
    }
}

//Print the Product List
function printProductList() {
    // Create a new document
    const docx = new DocxGen();
  
    // Create the table with header row
    const table = [
      ['Product', 'Quantity', 'Quantity', 'Quantity', 'Quantity', 'Quantity', 'Quantity', 'Quantity'],
    ];
  
    // Populate the table with product data
    for (const product of AllProducts) {
      table.push([product.name, '', '', '', '', '', '', '']);
    }
  
    // Generate the document content
    const content = [
      {
        table: {
          rows: table.map(row => ({
            cells: row.map(cell => ({ text: cell })),
          })),
        },
      },
    ];
  
    // Set the document content
    docx.setData({
      content,
    });
  
    // Render the document
    docx.render();
  
    // Generate the blob for the document
    const out = docx.getZip().generate({ type: 'blob' });
  
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(out);
    link.download = 'product_list.docx';
  
    // Simulate a click event to trigger the download
    link.dispatchEvent(new MouseEvent('click'));
  
    // Clean up the temporary URL
    URL.revokeObjectURL(link.href);
}

// Display all products
displayAllProducts();
