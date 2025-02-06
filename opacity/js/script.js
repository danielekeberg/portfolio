function dogSlider() {
    const value = document.getElementById('dogRange').value;
    const test = document.getElementById('test');
    const dog = document.getElementById('dog');

    const opacity = value / 100;
    test.innerHTML = `hello ${value}%`;
    dog.style.opacity = opacity;

    if(value == 69) {
    document.getElementById('test').style.color = 'blue';
    } else {
    document.getElementById('test').style.color = '#181818';
    }
    console.log('aosdn');
}

dogSlider();
document.getElementById('dogRange').addEventListener('click', dogSlider);
