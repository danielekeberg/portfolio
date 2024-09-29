const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const chokidar = require('chokidar');

// Define the folder where your .md files are stored
const contentDir = path.join(process.cwd(), 'content/product');

// Define the output directory and file path
const outputDir = path.join(process.cwd(), 'public');
const outputFile = path.join(outputDir, 'product.json');

// Function to read and parse all .md files
function getProducts() {
  const files = fs.readdirSync(contentDir);

  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const fullPath = path.join(contentDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        title: data.title || '',
        company: data.company || '',
        slug: data.slug || '',
        start: data.start_date || '',
        end: data.end_date || ''
      };
    });
}

// Function to generate product.json file
function generateJsonFile() {
  const products = getProducts();
  const jsonData = { products };

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));
  console.log('product.json has been updated!');
}

// Watch for changes in the content directory
chokidar.watch(contentDir).on('all', (event, path) => {
  console.log(`File ${path} has been ${event}`);
  generateJsonFile();
});

// Initial generation of product.json
generateJsonFile();
