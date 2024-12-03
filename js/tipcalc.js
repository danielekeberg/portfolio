function tipCalc() {
    var subtotalElem = document.getElementById('bill');
    var tipElem = document.getElementById('tip');
    var totalElem = document.getElementById('total');
    var subtotal = parseFloat(subtotalElem.value);
    var tip = parseFloat(tipElem.value);
    var total = subtotal + (subtotal * tip / 100);
    totalElem.innerHTML = total;
}

document.getElementById('calculate').addEventListener('click', tipCalc);