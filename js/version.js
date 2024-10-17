fetch('../package.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('version').innerText = `Version: ${data.version}`;
  })
  .catch(error => console.error('Error fetching version:', error));

// fetch('../package.json')  
//   .then(response => response.json())
//   .then(data => {
//     const versionElements = document.querySelectorAll('.version');
//     versionElements.forEach(element => {
//       element.textContent = data.version;
//     });
//   });
