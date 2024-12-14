const params = new URLSearchParams(window.location.search);
const userId = params.get('id');

fetch(`../API/data.json`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const user = data.users.find(user => user.id == userId);
        if (user) {
            displayUserDetails(user);
        } else {
            document.getElementById("user-details").innerHTML = '<p id="user-error">user not found.</p>';
        }
    })
    .catch(error => console.error("Error fetching the JSON file:", error));

function displayUserDetails(user) {
    const userDetails = document.getElementById("user-details");
    userDetails.innerHTML = `
    <div class="user-info">
        <div class="user-info-details">
            <div class="user-image-details">
                <img src="${user.image}" alt="${user.name}">
            </div>
            <div class="user-info-text">
                <h3>${user.name}</h3>
                <p><strong>Email:</strong>&nbsp${user.email}</p>
                <p><strong>Date of birth:</strong>&nbsp${user.birth}</p>
                <p><strong>Adress:</strong>&nbsp${user.adress}</p>
                <p><strong>Gender:</strong>&nbsp${user.gender}</p>
                <p><strong>Role:</strong>&nbsp${user.role}</p>
            </div>
        </div>
    </div>
    `;
}