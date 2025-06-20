document.addEventListener('DOMContentLoaded', function() {
    // Get all timeline containers
    const timelineContainers = document.querySelectorAll('.timeline-container');

    timelineContainers.forEach(container => {
        const timeline = container.querySelector('.timeline-horizontal');
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');
        const scrollAmount = 300; // Width of one card

        // Previous button click handler
        prevBtn.addEventListener('click', () => {
            timeline.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        // Next button click handler
        nextBtn.addEventListener('click', () => {
            timeline.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Update button states based on scroll position
        const updateButtonStates = () => {
            const isAtStart = timeline.scrollLeft === 0;
            const isAtEnd = timeline.scrollLeft >= timeline.scrollWidth - timeline.clientWidth;

            prevBtn.style.opacity = isAtStart ? '0.5' : '1';
            nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
        };

        // Listen for scroll events
        timeline.addEventListener('scroll', updateButtonStates);
        
        // Initial button state
        updateButtonStates();
    });
}); 