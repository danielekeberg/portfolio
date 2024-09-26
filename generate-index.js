const fs = require('fs');
const path = require('path');
const contentDir = path.join(__dirname, 'content', 'works'); // Adjust this path to match your setup
const outputFile = path.join(contentDir, 'index.json');

// Function to generate index.json
function generateIndex() {
  fs.readdir(contentDir, (err, files) => {
    if (err) {
      console.error('Error reading content directory:', err);
      return;
    }

    const works = [];

    files.forEach((file) => {
      if (file.endsWith('.md') || file.endsWith('.json')) {
        const filePath = path.join(contentDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Example: Extract metadata for Markdown files or read JSON directly
        const metadata = extractMetadata(fileContent); // Implement this based on your file format
        works.push(metadata);
      }
    });

    fs.writeFileSync(outputFile, JSON.stringify(works, null, 2));
    console.log('index.json has been updated successfully.');
  });
}

// Example function to extract metadata (you may need to adjust based on file format)
function extractMetadata(content) {
  // Implement metadata extraction logic here based on your content format
  return {
    title: 'Sample Title', // Extract from content
    start_date: '2024', // Extract from content
    end_date: 'Present', // Extract from content
    company: 'Sample Company' // Extract from content
  };
}

generateIndex();
