let users = [];

fetch('../API/users.json')
    .then(response => response.json())
    .then(data => users = data)
    .catch(error => console.error('Error loading JSON:', error));

const searchInput = document.getElementById('searchInput');
const dropdownMenu = document.getElementById('dropdownMenu');

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.trim().toLowerCase();

    if (!searchValue) {
        dropdownMenu.style.display = 'none';
        dropdownMenu.innerHTML = '';
        return;
    }

    const filteredUsers = users.filter(user =>
        user.toLowerCase().startsWith(searchValue)
    );

    if (filteredUsers.length > 0) {
        dropdownMenu.innerHTML = '';
        filteredUsers.forEach(user => {
            const option = document.createElement('div');
            option.textContent = user;
            option.addEventListener('click', () => {
                searchInput.value = user;
                navigateToPage(user);
            });
            dropdownMenu.appendChild(option);
        });
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const searchValue = searchInput.value.trim();

        if (users.includes(searchValue)) {
            
            document.getElementById("searchSuccess").style.opacity = '1';
            setTimeout(() => {
                document.getElementById("searchSuccess").style.opacity = '0';
                navigateToPage(searchValue);
            }, 1000);
        } else {
            document.getElementById("searchError").style.opacity = '1';
            setTimeout(() => {
                document.getElementById("searchError").style.opacity = "0";
            }, 3000);
        }
    }
});

function navigateToPage(user) {
    const filePath = `/dashboard/${user.toLowerCase()}.html`;
    window.location.href = filePath;
}

const dod = document.querySelector(".dod");
const hoverDod = document.querySelector("#hover-dod");

function hoverOverDod() {
    hoverDod.style.opacity = "1";
}

function leaveHoverDod() {
    hoverDod.style.opacity = "0";
}

dod.addEventListener("mouseover", hoverOverDod);
dod.addEventListener("mouseleave", leaveHoverDod);
