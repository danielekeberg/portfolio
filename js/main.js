document.addEventListener('DOMContentLoaded', async () => {
    // Load blog posts
    const blogContainer = document.getElementById('blog-post');
  
    async function loadBlogPosts() {
      try {
        const response = await fetch('/content/blog/blog.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const posts = await response.json();
  
        posts.forEach((post) => {
          const postElement = document.createElement('article');
          postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.excerpt}</p>
            <a href="${post.url}">Read more</a>
          `;
          blogContainer.appendChild(postElement);
        });
      } catch (error) {
        console.error('Error loading blog posts:', error);
        blogContainer.innerHTML = '<p>Failed to load blog posts. Please try again later.</p>';
      }
    }
  
    // Call the function to load blog posts
    loadBlogPosts();
  
    // Load recent works
    const worksContainer = document.getElementById('recent-works');
  
    async function loadRecentWorks() {
      try {
        const response = await fetch('/content/works/works.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const works = await response.json();
  
        works.forEach((work) => {
          const workElement = document.createElement('div');
          workElement.innerHTML = `
            <h3>${work.title}</h3>
            <p>${work.start_date} - ${work.end_date}</p>
            <p>${work.company}</p>
            <p>${work.description || ''}</p>
          `;
          worksContainer.appendChild(workElement);
        });
      } catch (error) {
        console.error('Error loading recent works:', error);
        worksContainer.innerHTML = '<p>Failed to load recent works. Please try again later.</p>';
      }
    }
  
    // Call the function to load recent works
    loadRecentWorks();
  });
  

  // Assuming the data is available at a specific URL or local JSON file
const fetchProducts = async () => {
  try {
    // Replace 'your-data-url.json' with the path to your JSON data
    const response = await fetch('/content/product.json/testerer.json');
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Function to render products on the webpage
const renderProducts = (products) => {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Clear any existing content

  products.forEach((product) => {
    // Create a new product card
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    // Create the product HTML
    productCard.innerHTML = `
      <h2>${product.title}</h2>
      <p>Price: $${product.price.toFixed(2)}</p>
      <div class="product-description">${product.description}</div>
      <img src="${product.image}" alt="${product.title}" />
    `;

    // Append the product card to the product list
    productList.appendChild(productCard);
  });
};

// Call the function to fetch and display products
fetchProducts();
