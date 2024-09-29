// script.js - Fetch and render all products from index.json
async function fetchProductData() {
  try {
    // Fetch the product data from your JSON file
    const response = await fetch('/public/product.json'); // Adjust the path if necessary
    const data = await response.json();

    // Render all products
    data.products.forEach(renderProduct);
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
}

function renderProduct(product) {
  const productContainer = document.getElementById('product-container');

  // Create the HTML structure for each product
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

  // Append the HTML to the product container
  productContainer.innerHTML += productHTML;
}

// Call the function to fetch and display the products
fetchProductData();
