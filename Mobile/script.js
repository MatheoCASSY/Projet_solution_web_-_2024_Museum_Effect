
const menuLinks = document.querySelectorAll('header a');
menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#FF5733';
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'all 0.3s ease';
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = '';
        link.style.transform = 'scale(1)';
    });
});
const images = document.querySelectorAll('.container img');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1)';
            entry.target.style.opacity = '1';
            entry.target.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        } else {
            entry.target.style.transform = 'scale(0.8)';
            entry.target.style.opacity = '0';
        }
    });
});

images.forEach(image => {
    image.style.transform = 'scale(0.8)';
    image.style.opacity = '0';
    observer.observe(image);
});
const logo = document.querySelector('.logo img');

logo.addEventListener('click', () => {
    logo.style.transition = 'transform 0.5s ease';
    logo.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        logo.style.transform = 'rotate(0deg)';
    }, 500);
});
const qrCode = document.querySelector('.qrcode img');

qrCode.addEventListener('mouseenter', () => {
    qrCode.style.boxShadow = '0 0 20px #FF5733';
    qrCode.style.transition = 'box-shadow 0.3s ease';
});

qrCode.addEventListener('mouseleave', () => {
    qrCode.style.boxShadow = '';
});
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
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
const boutton = document.querySelector('.bouttoncontact');
boutton.addEventListener('click', (event) => {
    event.preventDefault();
    const confirmation = confirm('Voulez-vous vraiment accéder à la page Nous contacter ?');
    if (confirmation) {
        window.location.href = boutton.getAttribute('href');
    }
});