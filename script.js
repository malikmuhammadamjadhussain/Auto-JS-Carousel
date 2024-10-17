const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

const showImage = (index) => {
    images.forEach((img, i) => img.classList.toggle('active', i === index));
};

document.getElementById('next').onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
};

document.getElementById('prev').onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
};

// Auto next every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 3000);
