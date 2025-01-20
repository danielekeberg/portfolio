const params = new URLSearchParams(window.location.search);
const selectedParams = params.get('id');

fetch('params.json')
    .then(response => {
        if(!response.ok) {
            throw new Error(`Hælt rått`);
        }
        return response.json();
    })
    .then(data => {
        const user = data.users.find(user => user.id === Number(selectedParams));

        if (user) {
            document.getElementById('post').innerHTML = `
            <h1>${user.name}</h1>
            <p>${user.id}</p>
            <p>${user.age}</p>
            <img src="${user.img}" alt="${user.name}">`;
        }
    })
