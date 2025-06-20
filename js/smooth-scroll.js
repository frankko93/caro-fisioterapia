// Smooth scroll functionality for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all links that have a hash
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get the navigation height for offset
                const navHeight = document.querySelector('.main-nav').offsetHeight;
                
                // Calculate the target position with offset
                const targetPosition = targetElement.offsetTop - navHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 