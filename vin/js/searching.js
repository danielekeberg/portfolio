document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        const input = document.getElementById('searchInput').value;
        console.log(input);
        location.href = `../../vin/search/?s=${input}`;
    }
})