fetch('http://localhost:3000/version')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('version').innerText = `Version: ${data.version}`;
  })
  .catch(error => console.error('Error fetching version:', error));