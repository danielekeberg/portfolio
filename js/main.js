document.addEventListener('DOMContentLoaded', async () => {
    const blogContainer = document.getElementById('blog-post'); // This ID should match the <main> element

    async function loadPosts() {
        try {
            const response = await fetch('/content/blog/index.json'); // Update the path based on your setup
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const posts = await response.json();

            posts.forEach(post => {
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

    loadPosts();
});
