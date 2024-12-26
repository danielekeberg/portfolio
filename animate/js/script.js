const image = document.querySelector('.animated-image');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const newPosition = scrollPosition * 0.5;

    image.style.transform = `translateY(${newPosition}px)`;
})