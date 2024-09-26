document.addEventListener('DOMContentLoaded', async () => {
    // Load blog posts
    const blogContainer = document.getElementById('blog-post'); // Ensure this ID matches your <main> element for blog posts
  
    async function loadBlogPosts() {
      try {
        const response = await fetch('/content/blog/index.json'); // Update the path based on your setup
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
    const worksContainer = document.getElementById('recent-works'); // Ensure this ID matches your <main> element for recent works
  
    async function loadRecentWorks() {
      try {
        const response = await fetch('/content/works/index.json'); // Update the path based on your setup
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
  