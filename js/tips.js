document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for card animations
    const cards = document.querySelectorAll('.tip-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const modalTriggers = document.querySelectorAll('.read-more');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Open modal
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal functions
    const closeModal = (modal) => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Close with button
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    // Close with click outside
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'flex') {
                    closeModal(modal);
                }
            });
        }
    });

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
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animar título de sección
                const title = entry.target.querySelector('.section-title');
                if (title) title.classList.add('visible');
                
                // Animar tarjetas
                const sectionCards = entry.target.querySelectorAll('.tip-card');
                sectionCards.forEach((card, index) => {
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
        sectionObserver.observe(section);
    });
}); 