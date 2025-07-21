function error() {
    const d = document.createElement('div');
    d.className = 'error';
    d.innerHTML = 
    `
    <h1>Info! :D</h1>
    <p>Note: I'm currently updating the progress from last week. It will be fixed shortly — thanks for your patience!</p>
    `;
    document.getElementById('nav').appendChild(d);
}

document.getElementById('error').addEventListener('mouseover', error);
document.getElementById('error').addEventListener('mouseleave', () => {
    document.querySelector('.error').remove();
});