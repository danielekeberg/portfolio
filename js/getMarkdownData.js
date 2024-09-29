// js/getMarkdownData.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the directory where your Markdown files are stored
const postsDirectory = path.join(process.cwd(), 'content/product');

// Function to fetch post data based on slug
export async function getPostData(slug) {
  // Construct the full path to the Markdown file
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  // Check if the file exists
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`);
  }

  // Read the file contents
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parse the front matter and the content using gray-matter
  const { data, content } = matter(fileContents);

  // Return the parsed data
  return {
    title: data.title || '',
    slug: data.slug || '',
    price: data.price || 0, // Adjust if you have price information in front matter
    description: data.description || '', // Adjust if you have description in front matter
    contentHtml: content, // This is the raw markdown content
    image: {
      url: data.image || '',
      alt: data.title || 'Product Image', // Use the title as alt text if not specified
    },
  };
}
