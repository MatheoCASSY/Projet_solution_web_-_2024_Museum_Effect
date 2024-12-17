window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    document.getElementById('progressBar').style.height = `${progress}%`;
});

const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

const images = document.querySelectorAll('.container img');
images.forEach((image) => {
    const scaleUp = () => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'transform 0.3s ease-in-out';
    };
    const scaleDown = () => {
        image.style.transform = 'scale(1)';
    };
    
    image.addEventListener('mouseenter', scaleUp);
    image.addEventListener('mouseleave', scaleDown);
    image.addEventListener('touchstart', scaleUp);
    image.addEventListener('touchend', scaleDown);
});

const boutton = document.querySelector('.bouttoncontact');
boutton.addEventListener('click', (event) => {
    event.preventDefault();
    const confirmation = confirm('Voulez-vous vraiment accéder à la page Nous contacter ?');
    if (confirmation) {
        window.location.href = boutton.getAttribute('href');
    }
});

document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
    card.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut (comme le scroll)
        card.classList.toggle('flipped');
    });
});
