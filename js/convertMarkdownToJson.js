// Use ES module syntax
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the folder where your .md files are stored
const contentDir = path.join(process.cwd(), 'content/product');
const outputFile = path.join(process.cwd(), 'public', 'product.json'); // Path where the JSON file will be generated

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

  fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));
  console.log('product.json has been updated!');
}

// Run the script
generateJsonFile();
