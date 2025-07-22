function error() {
    const d = document.createElement('div');
    d.className = 'error';
    d.innerHTML = 
    `
    <h1>Note:</h1>
    <p><strong>Everything</strong> works as intended! :)</p>
    `;
    document.getElementById('nav').appendChild(d);
}

document.getElementById('error').addEventListener('mouseover', error);
document.getElementById('error').addEventListener('mouseleave', () => {
    document.querySelector('.error').remove();
});

