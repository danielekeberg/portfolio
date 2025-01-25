const params = new URLSearchParams(window.location.search);
const selectedPokemon = params.get("name");
const pokeValue = document.getElementById("pokemonName").value.toLowerCase();

fetchAllPokemons();
async function fetchPokemon() {
    try {
        // const pokeValue = document.getElementById("pokemonName").value.toLowerCase();
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeValue}`);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);

        if (!response.ok) {
            throw new Error("Error fetching data");
        }

        const data = await response.json();
        const display = document.getElementById("pokemon");

        display.innerHTML = `
        <div class="pokeContainer">
            <div class="pokeCard">
                <div class="pokeStats">
                    <div class="pokeId">
                        <h1>${data.name}</h1>
                    </div>
                    <p id="id"></p>
                    <p><strong>Height:</strong> ${data.height}</p>
                    <p><strong>Weight:</strong> ${data.weight}</p>
                </div>
                <div class="">
                    <img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}">
                    <p class="type" id="${data.types[0].type.name}">Type: ${data.types[0].type.name}</p>
                </div>
            </div>
            <div class="poke-stats">
                <p><strong>${data.stats[0].stat.name}:</strong> ${data.stats[0].base_stat}</p>
                <p><strong>${data.stats[1].stat.name}:</strong> ${data.stats[1].base_stat}</p>
                <p><strong>${data.stats[2].stat.name}:</strong> ${data.stats[2].base_stat}</p>
                <p><strong>${data.stats[3].stat.name}:</strong> ${data.stats[3].base_stat}</p>
                <p><strong>${data.stats[4].stat.name}:</strong> ${data.stats[4].base_stat}</p>
                <p><strong>${data.stats[5].stat.name}:</strong> ${data.stats[5].base_stat}</p>
            </div>
        </div>
        <div class="pokeNav">

        </div>
        `;
        const dataId = `${data.id}`;
        document.getElementById("id").textContent = "ID:" + " " + "#" + dataId.padStart(4, '0');
    }
    catch(error) {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = `<p>Please enter a valid Pokémon!</p>`;
    }
}
fetchPokemon();
document.getElementById("fetchPokemon").addEventListener("click", fetchPokemon);
document.getElementById("fetchPokemon").addEventListener("click", () => {
    window.location = "./?name=" + document.getElementById("pokemonName").value.toLowerCase();
})
document.getElementById("pokemonName").addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        window.location = "./?name=" + document.getElementById("pokemonName").value.toLowerCase();
        fetchPokemon();
        document.getElementById("pokemonName").value = "";
    }
});
document.getElementById("fetchPokemon").addEventListener("click", () => {
    document.getElementById("pokemonName").value = "";
});

async function fetchAllPokemons() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");

        console.log(response);

        if (!response.ok) {
            console.error("Error fetching data");
        }

        const allPokes = document.getElementById("allPokes");
        const data = await response.json();
        const pokeData = data.results;

        console.log(data);

        document.getElementById("pokemonName").placeholder = `Search ${data.count} Pokémons`;

        pokeData.forEach(pokemon => {
            const newPoke = document.createElement("div");
            newPoke.innerHTML = `
            <a href="./?name=${pokemon.name}"><p>${pokemon.name}</p></a>`
            allPokes.appendChild(newPoke);
        })
        
    }
    catch(error) {
        console.error(error);
    }
}

