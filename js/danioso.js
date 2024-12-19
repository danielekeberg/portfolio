let users = [];

fetch('../API/users.json')
    .then(response => response.json())
    .then(data => users = data)
    .catch(error => console.error('Error loading JSON:', error));

const searchInput = document.getElementById('searchInput');
const dropdownMenu = document.getElementById('dropdownMenu');

function createDropdownItem(user) {
    const option = document.createElement('div');
    option.classList.add('dropdown-item');

    const dodLabel = user.stats.Dod ? " <span class='dod-label'>Død</span>" : "";
    const utestengtLabel = user.stats.Utestengt ? " <span class='utestengt-label'>Utestengt</span>" : "";

    option.innerHTML = `
        <strong>${user.name}${dodLabel}${utestengtLabel}</strong>
        <small>
            ${user.stats.Rank}
        </small>
    `;
    
    option.addEventListener('click', () => {
        searchInput.value = user.name;
        navigateToPage(user.name);
        dropdownMenu.style.display = 'none';
    });
    return option;
}

function filterDropdown() {
    const searchValue = searchInput.value.trim().toLowerCase();

    if (!searchValue) {
        dropdownMenu.style.display = 'none';
        dropdownMenu.innerHTML = '';
        return;
    }

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().startsWith(searchValue)
    );

    if (filteredUsers.length > 0) {
        dropdownMenu.innerHTML = '';
        filteredUsers.forEach(user => {
            const item = createDropdownItem(user);
            dropdownMenu.appendChild(item);
        });
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
}

function navigateToPage(userName) {
    const filePath = `/dashboard/${userName.toLowerCase()}.html`;
    window.location.href = filePath
}

searchInput.addEventListener('input', filterDropdown);
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const searchValue = searchInput.value.trim();
        const matchedUser = users.find(user => user.name === searchValue);

        if (matchedUser) {

            document.getElementById("searchSuccess").style.opacity = '1';
            setTimeout(() => {
                document.getElementById("searchSuccess").style.opacity = '0';
                navigateToPage(matchedUser.name);
            }, 1000);
        } else {
            document.getElementById("searchError").style.opacity = '1';
            setTimeout(() => {
                document.getElementById("searchError").style.opacity = "0";
            }, 3000);
        }
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('#searchInput') && !e.target.closest('#dropdownMenu')) {
        dropdownMenu.style.display = 'none';
    }
});