document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        console.log('asd')
        const q = document.getElementById('searchInput').value;
        window.location.href = `../../chess/user/?q=${q}&v=overview`;
    }
})