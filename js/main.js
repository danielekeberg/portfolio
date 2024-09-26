document.addEventListener('DOMContentLoaded', async () => {
    const blogContainer = document.getElementById('blog-posts');

    // Function to fetch and display posts
    async function loadPosts() {
        try {
            // Fetch list of blog posts (you may need to update this part to fetch your posts)
            const response = await fetch('/content/blog/index.json'); // Example JSON index
            const posts = await response.json();

            // Iterate and display each post
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

    // Load posts on page load
    loadPosts();
});
