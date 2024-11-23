let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-item");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
    }
}

function updateClock() {
    const startDate = new Date("2024-10-16T21:20:00"); // Data e hora do pedido de namoro
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("clock").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateClock, 1000);

// Carrossel automático
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3000); // Muda de slide a cada 3 segundos

// Corações descendo
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    document.querySelector('.hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove o coração após 5 segundos
}

setInterval(createHeart, 500); // Cria um novo coração a cada 0.5 segundos
