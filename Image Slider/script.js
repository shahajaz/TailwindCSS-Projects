const slider = document.getElementById("slider");
const slides = slider.children;
const totalSlides = slides.length;

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const dotsContainer = document.getElementById("dots");

let currentIndex = 0;
let interval;

// Create dots dynamically
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    dot.className = "w-3 h-3 rounded-full bg-gray-400";
    dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlider();
});
dotsContainer.appendChild(dot);
}

const dots = dotsContainer.children;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update active dot
    for (let dot of dots) {
        dot.classList.remove("bg-white");
        dot.classList.add("bg-gray-400");
    }
    dots[currentIndex].classList.remove("bg-gray-400");
    dots[currentIndex].classList.add("bg-white");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto Play
function startAutoPlay() {
    interval = setInterval(nextSlide, 3000);
}

function stopAutoPlay() {
    clearInterval(interval);
}

slider.parentElement.addEventListener("mouseenter", stopAutoPlay);
slider.parentElement.addEventListener("mouseleave", startAutoPlay);

// Initialize
updateSlider();
startAutoPlay();
