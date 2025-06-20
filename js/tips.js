document.addEventListener('DOMContentLoaded', function() {
    // Video Background Transitions
    const videos = document.querySelectorAll('.video-bg');
    let currentVideoIndex = 0;

    function switchVideo() {
        videos[currentVideoIndex].classList.remove('active');
        
        // Incrementar índice o volver a 0 si es el último
        if (currentVideoIndex === videos.length - 1) {
            currentVideoIndex = 0;
            // Reiniciar el primer video
            videos[0].currentTime = 0;
        } else {
            currentVideoIndex++;
        }
        
        videos[currentVideoIndex].classList.add('active');
    }

    // Cambiar video cada 6 segundos
    setInterval(switchVideo, 6000);

    // Intersection Observer para las secciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animar título de sección
                const title = entry.target.querySelector('.section-title');
                if (title) title.classList.add('visible');
                
                // Animar tarjetas
                const cards = entry.target.querySelectorAll('.tip-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200); // Retraso escalonado
                });

                // Actualizar navegación activa
                const id = entry.target.getAttribute('id');
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.2
    });

    // Observar todas las secciones
    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });
}); 