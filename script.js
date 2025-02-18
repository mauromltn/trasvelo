document.addEventListener('scroll', function() {
    const mainSection = document.querySelector('main');
    const mainPosition = mainSection.getBoundingClientRect();
    if (mainPosition.bottom <= 850) {
        mainSection.classList.add('border');
    } else {
        mainSection.classList.remove('border');
    }
});

// Initialize Lenis
const lenis = new Lenis({
    duration: 2,
    smooth: true
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);