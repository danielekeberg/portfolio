// Example JavaScript code to render works dynamically
const worksContainer = document.getElementById('recent-works'); // Replace with your actual container ID

fetch('/content/works/index.json') // Adjust path based on how your build process handles the files
  .then(response => response.json())
  .then(works => {
    works.forEach(work => {
      const workElement = document.createElement('div');
      workElement.innerHTML = `
        <h3>${work.title}</h3>
        <p>${work.start_date} - ${work.end_date}</p>
        <p>${work.company}</p>
        <p>${work.description || ''}</p>
      `;
      worksContainer.appendChild(workElement);
    });
  })
  .catch(error => console.error('Error loading works:', error));
