const apiUrl = 'https://dog.ceo/api/breeds';
const params = new URLSearchParams(window.location.search);
const searchedBreed = params.get('breed');
const uppercaseBreed = searchedBreed.toUpperCase();

async function fetchDog() {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${searchedBreed}/images/random`);

        if (!response.ok) {
            throw new Error('Error fetching dog image');
        }

        const data = await response.json();
        document.getElementById('randomDog').src = `${data.message}`;
        document.getElementById('newDog').textContent = `Fetch ${uppercaseBreed} Images`;
        
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
            d.innerHTML = `<a href="./?breed=${breed}"><p>${breed}</p></a>`;
            allBreeds.appendChild(d);
        })
    }
    catch(error) {
        console.error(error);
    }
}

fetchBreeds();