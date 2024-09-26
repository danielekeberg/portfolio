const fs = require('fs');
const path = require('path');
const matter = require('gray-matter'); // Parses front matter from Markdown files

// Define the directories and output paths
const directories = [
  { dir: path.join(__dirname, 'content', 'works'), output: path.join(__dirname, 'content', 'works', 'index.json') },
  { dir: path.join(__dirname, 'content', 'blog'), output: path.join(__dirname, 'content', 'blog', 'index.json') }
];

// Function to generate index.json for a specified directory
function generateIndex(dirPath, outputPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error reading content directory: ${dirPath}`, err);
      return;
    }

    const entries = [];

    files.forEach((file) => {
      if (file.endsWith('.md')) {
        const filePath = path.join(dirPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Extract front matter metadata from the markdown file
        const { data } = matter(fileContent);

        // Push extracted data into the entries array, adjusting fields as needed
        entries.push({
          title: data.title || 'Untitled',
          start_date: data.start_date || null,
          end_date: data.end_date || null,
          company: data.company || null,
          description: data.description || '',
          url: file.replace('.md', '.html') // Optional: Adjust as needed if you have URLs
        });
      }
    });

    // Write the compiled entries to the index.json file
    fs.writeFileSync(outputPath, JSON.stringify(entries, null, 2));
    console.log(`index.json has been updated successfully for ${dirPath}`);
  });
}

// Generate index.json for each specified directory
directories.forEach(({ dir, output }) => generateIndex(dir, output));
