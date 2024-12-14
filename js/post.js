const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

fetch(`../API/data.json`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const post = data.posts.find(post => post.id == postId);
        if (post) {
            displayPostDetails(post);
        } else {
            document.getElementById("post-details").innerHTML = '<p id="post-error">Post not found.</p>';
        }
    })
    .catch(error => console.error("Error fetching the JSON file:", error));

function displayPostDetails(post) {
    const postDetails = document.getElementById("post-details");
    postDetails.innerHTML = `
    <img src="${post.image}" alt="${post.title}">
    <div class="post-info-details">
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p id="author"><strong>${post.created_at}</strong>&nbsp${post.author}</p>
    </div>
    `;
}