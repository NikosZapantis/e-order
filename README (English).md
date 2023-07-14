*This is the Readme file of the E-order application, which contains a quick, concise yet comprehensive description of both the functionality of this application and the code components that contribute to the execution of all processes.*

The application has been developed with the aim of easily and quickly organizing an order for specific and predefined products and categories, allowing users to create their order with great convenience in just 3 clicks. The user has full access to both the categories and the products belonging to them, to activate/deactivate/returnToDefault the status of the products displayed in the categories of the home page (index.html), as well as to preview the shopping cart that hosts the products added by the user and their quantities. It is important to note that both the status of the products and the products in the cart are stored in the user's browser localStorage, allowing the order to be completed gradually and not necessarily at the same time.

*Analysis of the application functions:*

- Initially, all products and categories are initialized in a const and stored in the localStorage with all the characteristics that define them.

*e-order.js*
- function displayCategories(): Displays all the categories that have been initialized on the screen in the form of 'buttons'.
- function getProductQuantity(productId): When called, this function returns the quantity of the product passed as a parameter.
- function handleCategoryFocus(event): Manages the focus of a specific category and adds the 'selected' class to it to display it with the CSS characteristics defined for this class.
- function filterProducts(categoryId): Displays the products belonging to the specific category, i.e., those with a categoryId matching the Id number of the category.
- function addToCart(productId): Stores the product that has just been added, along with its quantity, in the cartItems array in localStorage after the function is called.
- function removeFromCart(productId): Stores either the new quantity after the decrease or removes the product from the cart if the new quantity is 0, in the cartItems array in localStorage.
- function showNotification(message, isAdd): Displays an informative message each time the quantity of a product is changed, either to 1 (added to the cart) or 0 (removed from the cart).
- function viewCart(): Redirects to the my-cart.html file, which is the cart page for previewing it.
- function viewActiveProducts(): Redirects to the active-products.html file, which is the page for previewing all products and changing their status.
- function redirectToMainPage(): Redirects to the index.html file, which is the initial page with categories and products.
- function clearCart(): Clears the cartItems array in localStorage and reloads the page to reflect the changes.
- function UpdateCartCount(): Updates the value of the cart to the number of products.

*my-cart.js*
- function displayCartItems(): Displays all the products in the cartItems array in localStorage in the form of 'li'.
- function convertCartListToExcel(): Converts the cartItems list into an .xls file with a specific format to differentiate products and categories with borders between them (td-th).
- function createDownloadLink(content, filename): When called, creates a download link containing the .xls file with all the products and their quantities in the cart.
- function calculateCartItems(): Manages the value of the total products in the cart and the unique products in the cart (distinct Ids).
- function handleKeyDown(event): Manages the response to the 'Enter' event key by calling the convertCartListToExcel() function.

*active-products.js*
- function displayAllProducts(): Displays all the products in the order they are in the AllProducts array in localStorage in the form of 'li' and with a checkbox next to each product for - enabling or disabling it individually.
- function convertCartToExcelList(): Converts the products into a list in an .xls file with two columns, one for the products and one for the name of the category they belong to (with borders between them).
- function createDownloadLink(content, filename): Similar to my-cart.js, it creates the download link containing the list of products and categories.
- function toggleProductActiveState(productId, isActive): When called, it handles the change of status for the specific product passed as a parameter by replacing its status with the opposite of the isActive parameter.
- function EnableAllProducts(): When called, it enables all the products, i.e., changes the status of all to 'active'.
- function DisableAllProducts(): When called, it disables all the products, i.e., changes the status of all to 'disabled'.
- function DefaultAllProducts(): When called, it resets the status of all the products to the default, which is the predefined status in the AllProducts const in e-order.js.