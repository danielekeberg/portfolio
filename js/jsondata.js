fetch("../API/data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        displayUsers(data.users);
        displayPosts(data.posts);
    })
    .catch(error => console.error("Error fetching the JSON file:", error));

function displayUsers(users) {
    const userList = document.getElementById("user-list");
    userList.innerHTML = "<h2>Users</h2>";

    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <a href="user.html?id=${user.id}">
        <div class="user-div">
            <div class="user-info">
                <p><strong>Name:</strong>&nbsp${user.name}</p>
                <p><strong>Email:</strong>&nbsp${user.email}</p>
                <p><strong>Role:</strong>&nbsp${user.role}</p>
            </div>
            <div class="user-image">
                <img src="${user.image}" alt="${user.name}">
            </div>
        </div>
        </a>
        `;
        userList.appendChild(userDiv);
    });
}

function displayPosts(posts) {
    const postList = document.getElementById("post-list");
    postList.innerHTML = "<h2>Posts</h2>";

    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.innerHTML = `
        <a href="post.html?id=${post.id}">
            <div class="post-div">
                <div class="post-info">
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                </div>
                <div class="post-date">
                    <p>${post.created_at} ${post.author}</p>
                </div>
            </div>
        </a>
        `;
        postList.appendChild(postDiv);
    })
}