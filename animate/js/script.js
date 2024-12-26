const image = document.querySelector('.animated-image');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get current scroll position

    // Calculate values for diagonal move, rotation, and scaling
    const diagonalMove = scrollPosition * 0.5; // Adjust for speed
    const rotation = scrollPosition * 0.1; // Rotation speed
    const scaling = 1 + scrollPosition / 2000; // Gradual scaling

    // Update the image's transform properties
    image.style.transform = `translate(${diagonalMove}px, ${diagonalMove}px) rotate(${rotation}deg) scale(${scaling})`;
});

const secondImage = document.querySelector('.second-animated-image');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get current scroll position
    const newPosition = scrollPosition * 0.5; // Adjust multiplier for speed

    // Update the image's position
    secondImage.style.transform = `translateY(${newPosition}px)`;
});


const thirdImage = document.querySelector('.third-animated-image');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Current scroll position
    const maxScroll = document.body.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollFraction = scrollPosition / maxScroll; // Normalize scroll value (0 to 1)

    // Circular motion calculation
    const radius = 100; // Adjust the size of the circular path
    const angle = scrollFraction * 2 * Math.PI; // Angle in radians
    const x = radius * Math.cos(angle); // X-coordinate
    const y = radius * Math.sin(angle); // Y-coordinate

    // Set opacity based on scroll position
    const opacity = Math.min(1, Math.max(0, scrollFraction * 2 - 0.5)); // Fade in at start, fade out at end

    // Update the image's position and opacity
    thirdImage.style.transform = `translate(${x}px, ${y}px)`;
    thirdImage.style.opacity = opacity;
});
