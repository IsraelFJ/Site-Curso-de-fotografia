document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('article img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentImageIndex = 0;

    // Abre o lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = images[currentImageIndex].src;
        lightbox.classList.add('active');
    }

    // Fecha o lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
    }

    // Navegação
    function navigate(direction) {
        currentImageIndex += direction;
        if (currentImageIndex >= images.length) currentImageIndex = 0;
        if (currentImageIndex < 0) currentImageIndex = images.length - 1;
        lightboxImg.src = images[currentImageIndex].src;
    }

    // Event Listeners
    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', () => navigate(-1));
    nextBtn.addEventListener('click', () => navigate(1));

    // Fecha ao clicar fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
});