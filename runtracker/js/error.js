function error() {
    const d = document.createElement('div');
    d.className = 'error';
    d.innerHTML = 
    `
    <h1>Note:</h1>
    <p><strong>"This Week"</strong> currently shows data from all running sessions. This will be fixed!</p>
    <p>I'm currently updating the progress from last week. It will be fixed shortly — thanks for your patience!</p>
    `;
    document.getElementById('nav').appendChild(d);
}

document.getElementById('error').addEventListener('mouseover', error);
document.getElementById('error').addEventListener('mouseleave', () => {
    document.querySelector('.error').remove();
});

