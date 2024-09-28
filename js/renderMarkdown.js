// Function to get the slug from the current URL
function getSlugFromUrl() {
    const urlParts = window.location.pathname.split('/');
    return urlParts[urlParts.length - 1]; // Assumes slug is the last part of the URL
  }
  
  import { marked } from 'marked';

  async function fetchMarkdown(filePath) {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error('Markdown file not found');
    }
    return await response.text();
  }
  
  async function renderMarkdown(filePath) {
    const markdownText = await fetchMarkdown(filePath);
    const htmlContent = marked(markdownText);
    document.getElementById('content').innerHTML = htmlContent;
  }
  
  // Get the slug from the URL and use it to construct the Markdown file path
  const slug = getSlugFromUrl();
  renderMarkdown(`/content/posts/${slug}.md`);
  