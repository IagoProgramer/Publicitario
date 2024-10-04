// Carrossel
let slideIndex = 0;
const slides = document.querySelector('.carrossel-slide');
const totalSlides = slides.children.length;

function moveSlide(direction) {
    slideIndex += direction;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1; // Volta ao último slide se for negativo
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0; // Vai para o primeiro slide se passar do limite
    }
    const offset = -slideIndex * 320; // Largura de cada slide
    slides.style.transform = `translateX(${offset}px)`;
}

// Funcionalidade da barra de pesquisa
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function() {
    const searchText = this.value;
    document.querySelector('.search-box p').textContent = `Já pesquisado: ${searchText}`;
});
