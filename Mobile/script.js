// Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    document.getElementById('progressBar').style.height = `${progress}%`;
});

// Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        // Afficher ou cacher le bouton au scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        // Retour en haut au clic
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Image Scaling on Hover
const images = document.querySelectorAll('.container img');
images.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// Slider Pause on Hover
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
});

// Highlight Slider Images on Hover
const sliderImages = document.querySelectorAll('.slider img');
sliderImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.3)';
        image.style.boxShadow = '0 0 20px rgba(255, 87, 51, 1)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
        image.style.boxShadow = '';
    });
});

// Contact Button Confirmation
const contactButton = document.querySelector('.bouttoncontact');
contactButton.addEventListener('click', (event) => {
    event.preventDefault();
    const confirmation = confirm('Voulez-vous vraiment accéder à la page Nous contacter ?');
    if (confirmation) {
        window.location.href = contactButton.getAttribute('href');
    }
});

// Flashcard Flip on Click
document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
