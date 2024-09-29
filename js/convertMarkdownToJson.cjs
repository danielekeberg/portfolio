const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Define the folder where your .md files are stored (Markdown files for products)
const contentDir = path.join(process.cwd(), 'content/product');

// Define the output directory and file path (for product.json)
const outputDir = path.join(process.cwd(), 'public'); // The public directory for output files
const outputFile = path.join(outputDir, 'product.json'); // The full path to product.json

// Function to read and parse all .md files
function getProducts() {
  const files = fs.readdirSync(contentDir);

  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const fullPath = path.join(contentDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents); // Parse front matter and content

      return {
        title: data.title || '',
        slug: data.slug || '',
        price: data.price || 0,
        description: data.description || '',
        content: content || '',
        image: {
          url: data.image || '',
          alt: data.title || 'Product Image',
        },
      };
    });
}

// Write parsed data to product.json
function generateJsonFile() {
  const products = getProducts();
  const jsonData = { products };

  // Ensure the output directory (public) exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the JSON file to public/product.json
  fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));
  console.log('product.json has been updated!');
}

// Run the script
generateJsonFile();
