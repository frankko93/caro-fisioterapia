document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = document.querySelectorAll('.hero-background');
    let currentIndex = 0;
    const transitionTime = 3000; // Time between transitions (5 seconds)

    function nextBackground() {
        // Remove active class from current background
        backgrounds[currentIndex].classList.remove('active');
        
        // Move to next background
        currentIndex = (currentIndex + 1) % backgrounds.length;
        
        // Add active class to new background
        backgrounds[currentIndex].classList.add('active');
    }

    // Start the slideshow
    setInterval(nextBackground, transitionTime);

    // Preload images for smooth transitions
    const imageUrls = ['images/hero1.jpg', 'images/hero2.jpg', 'images/hero3.jpg'];
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}); 