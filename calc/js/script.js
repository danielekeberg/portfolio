const one = document.getElementById('1');

function addOne() {
    document.getElementById('display').textContent = '1';
}

one.addEventListener('click', addOne);