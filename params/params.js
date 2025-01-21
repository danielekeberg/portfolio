fetch('params.json')
.then(response => {
    if (!response.ok) {
        throw new Error(`jævlig epic error ${response.status}`);
    }
    return response.json();
})
.then(data => {
    data.users.forEach(user => {
        const paramsDiv = document.createElement('div');
        paramsDiv.innerHTML = `
        <div class="param">
        <a href="./post.html?id=${user.id}"><p>${user.name}</p></a>
        </div>`;
        document.getElementById('container').appendChild(paramsDiv);
    })
})
.catch(error => { 
    console.error('Error', error);
});