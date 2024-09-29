const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Define the folder containing your .md files and the output JSON file path
const contentDir = path.join(__dirname, '/content/product'); // Adjust this path to your .md files folder
const outputFile = path.join(__dirname, 'public', '/content/product/product.json'); // Path where you want your JSON file

// Function to read and parse .md files
function getProducts() {
  const files = fs.readdirSync(contentDir);

  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(contentDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContents); // Parses front matter and content

      return {
        title: data.title || '',
        slug: data.slug || '',
        price: data.price || 0,
        description: content || '',
        image: {
          url: data.image || '',
          alt: data.title || 'Product Image',
        },
      };
    });
}

// Function to write the products to product.json
function generateJsonFile() {
  const products = getProducts();
  const jsonData = { products };

  fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));
  console.log('product.json has been updated!');
}

// Run the script
generateJsonFile();
