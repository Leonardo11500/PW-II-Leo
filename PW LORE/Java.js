var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
var currentIndex = 0;

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateImage();
}
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateImage();
}
function updateImage() {
    var mainImage = document.getElementById("mainImage");
    mainImage.style.opacity = 0; // Efeito de fade-out

    setTimeout(() => {
        mainImage.src = images[currentIndex];
        mainImage.style.opacity = 1; // Efeito de fade-in
    }, 300);
}