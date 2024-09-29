// script.js - Fetch and render product data from index.json
async function fetchProductData() {
  try {
    // Fetch the product data from your JSON file
    const response = await fetch('/content/product/product.json'); // Adjust path if necessary
    const data = await response.json();

    // Get the first product (or loop if multiple products)
    const product = data.products[0]; 

    // Render the product to the page
    renderProduct(product);
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
}

function renderProduct(product) {
  const productContainer = document.getElementById('product-container');

  // Create the HTML structure for the product
  const productHTML = `
    <div class="item">
    <div class="work-info">
    <h5 class="active">${product.title}</h5>
    <p>${product.description}</p>
    </div>
    <p>Price: $${product.price}</p>
    <img src="${product.image.url}" alt="${product.image.alt}" style="max-width: 300px;">
    </div>
  `;

  // Inject the HTML into the product container
  productContainer.innerHTML = productHTML;
}

// Call the function to fetch and display the product
fetchProductData();
