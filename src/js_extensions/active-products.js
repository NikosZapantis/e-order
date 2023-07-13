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

// Converting All items into a list in excel
function convertCartToExcelList() {
  // Creating an HTML table with borders
  let htmlContent = '<table border="1">';

  // Add table headers
  htmlContent += '<tr><th>Προϊόν</th><th>Κατηγορία</th></tr>';

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

//Creating download link
function createDownloadLink(content, filename) {
  const downloadLink = document.createElement('a');
  downloadLink.href = content;
  downloadLink.download = filename;
  return downloadLink;
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

// Function to enable all products
function EnableAllProducts() {
  const currentlyAllProducts = JSON.parse(localStorage.getItem('AllProducts'));

  currentlyAllProducts.forEach(product => {
    if(product.status === 'disabled') {
      product.status = 'active';
    }
  });

  // Save the updated currentlyAllProducts array to localStorage
  localStorage.setItem('AllProducts', JSON.stringify(currentlyAllProducts));

  // Refresh the displayed products
  displayAllProducts();
}

// Function to disable all products
function DisableAllProducts() {
  const currentlyAllProducts = JSON.parse(localStorage.getItem('AllProducts'));

  currentlyAllProducts.forEach(product => {
    if(product.status === 'active') {
      product.status = 'disabled';
    }
  });

  // Save the updated currentlyAllProducts array to localStorage
  localStorage.setItem('AllProducts', JSON.stringify(currentlyAllProducts));

  // Refresh the displayed products
  displayAllProducts();
}

// Function to return back to default product's status
function DefaultAllProducts() {
  //On process
  const currentlyAllProducts = JSON.parse(localStorage.getItem('AllProducts'));

  currentlyAllProducts.forEach(product => {
    const defaultProduct = AllProducts.find(defaultProd => defaultProd.id === product.id);
    if (defaultProduct) {
      product.status = defaultProduct.status; // Set the product's status to the default status from the AllProducts array
    }
  });

  // Save the updated currentlyAllProducts array to localStorage
  localStorage.setItem('AllProducts', JSON.stringify(currentlyAllProducts));

  // Refresh the displayed products
  displayAllProducts();
}

// Display all products
displayAllProducts();
