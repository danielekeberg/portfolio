const params = new URLSearchParams(window.location.search);
const getUser = params.get('user');

async function fetchUser() {
    try {
        const response = await fetch(`https://fakestoreapi.com/users/${getUser}`);
        const data = await response.json();
        document.getElementById('userStats').innerHTML = `
        <div class="name">
            <p><strong>${data.name.firstname.toUpperCase()}</strong></p>
            <p><strong>${data.name.lastname.toUpperCase()}</strong></p>
        </div>
        <h3>${data.username}</h3>
        <p><strong>Password:</strong> ${data.password}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>City:</strong> ${data.address.city}</p>
        <p><strong>Street:</strong> ${data.address.street}</p>
        <p><strong>Street number:</strong> ${data.address.number}</p>
        <p><strong>Zip:</strong> ${data.address.zipcode}</p>`;
        document.getElementById('userStats').appendChild(d);
    } catch(error) {
        console.log(error);
    }
}

fetchUser();