function logout() {
    localStorage.removeItem('testName');
    window.location.reload();
}

document.getElementById('logout').addEventListener('click', logout);