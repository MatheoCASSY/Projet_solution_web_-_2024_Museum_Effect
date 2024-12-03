const cursor = document.createElement('div');
cursor.id = 'customCursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    const cursorX = e.pageX;
    const cursorY = e.pageY;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
});

cursor.style.position = 'absolute';
cursor.style.width = '30px';
cursor.style.height = '30px';
cursor.style.borderRadius = '50%';
cursor.style.backgroundColor = '#FF5733';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '1000';
cursor.style.transition = 'transform 0.1s ease';
cursor.style.transform = 'translate(-50%, -50%)';

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
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    document.getElementById('progressBar').style.height = `${progress}%`;
});

const slider = document.querySelector('.slider');
let isPaused = false;

slider.addEventListener('mouseenter', () => {
    isPaused = true;
    slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', () => {
    isPaused = false;
    slider.style.animationPlayState = 'running';
});

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
});