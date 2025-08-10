const uid = localStorage.getItem('userid');

function hamburger() {
    const d = document.createElement('div');
    d.className = 'dropdown';
    d.innerHTML = `
    <div class="menu">
        <p>${uid ? uid : 'refresh the page'}</p>
    </div>
    `;
    if(document.querySelector('.dropdown')) {
        document.querySelector('.dropdown').remove();
        return;
    }
    document.getElementById('hamburger').appendChild(d);
}

document.getElementById('hamburger').addEventListener('click', hamburger);