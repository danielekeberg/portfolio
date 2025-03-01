const apiUrl = 'https://dog.ceo/api/breeds';

async function fetchDog() {
    try {
        const response = await fetch(`${apiUrl}/image/random`);

        if (!response.ok) {
            throw new Error('Error fetching dog image');
        }

        const data = await response.json();
        document.getElementById('randomDog').src = `${data.message}`;

        
    }
    catch(error) {
        console.error(error);
    }
}

fetchDog();

document.getElementById('newDog').addEventListener('click', fetchDog);

async function fetchBreeds() {
    try {
        const response = await fetch(`${apiUrl}/list/all`)
        console.log(response);
        if (!response.ok) {
            throw new Error('Error fetching dog breeds');
        }
        const data = await response.json();
        const breeds = data.message;
        console.log(data.message);

        const allBreeds = document.getElementById('breeds');
        allBreeds.textContent = '';

        Object.keys(breeds).forEach(breed => {
            const d = document.createElement('div');
            d.className = 'dog';
            d.innerHTML = `<a href="./post/?breed=${breed}"><p>${breed}</p></a>`;
            allBreeds.appendChild(d);
        })
    }
    catch(error) {
        console.error(error);
    }
}

fetchBreeds();