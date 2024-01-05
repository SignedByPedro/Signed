// Canvas

const spiderManImage = document.querySelector(".spider-man");

// Event listener for left and right arrow keys
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    // Reset the gif by setting its source again
    spiderManImage.src = "./Images/canvas gif.gif";
  }
});

// Rugs

const chainImage = document.querySelector(".chain");

// Event listener for left and right arrow keys
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    // Reset the gif by setting its source again
    chainImage.src = "./Images/rugs gif.gif";
  }
});

// Order

document.addEventListener("DOMContentLoaded", function () {
  // Hide size and shape containers when the page first loads
  var sizeContainer = document.getElementById("sizeContainer");
  var shapeContainer = document.getElementById("shapeContainer");
  var rugSizeContainer = document.getElementById("rugSizeContainer");

  sizeContainer.style.display = "none";
  shapeContainer.style.display = "none";
  rugSizeContainer.style.display = "none";
});

function toggleFields() {
  var itemType = document.getElementById("itemType").value;
  var sizeContainer = document.getElementById("sizeContainer");
  var shapeContainer = document.getElementById("shapeContainer");
  var rugSizeContainer = document.getElementById("rugSizeContainer");

  // Hide both containers initially
  sizeContainer.style.display = "none";
  shapeContainer.style.display = "none";
  rugSizeContainer.style.display = "none";

  // Show the appropriate container based on the selected item type
  if (itemType === "canvas") {
    sizeContainer.style.display = "block";
  } else if (itemType === "rugs") {
    shapeContainer.style.display = "block";
    rugSizeContainer.style.display = "block";
  }
}

// Carousel Images

class Carousel {
  constructor(carouselId) {
    this.currentIndex = 0;
    this.carousel = document.getElementById(carouselId);
    this.totalSlides = this.carousel.querySelectorAll("img").length;
  }

  changeSlide(direction) {
    this.currentIndex =
      (this.currentIndex + direction + this.totalSlides) % this.totalSlides;

    const translateValue = -this.currentIndex * 100 + "%";
    this.carousel.style.transition = "transform 0.5s ease-in-out";
    this.carousel.style.transform = "translateX(" + translateValue + ")";
  }
}

// Create instances for each carousel
const canvasCarousel = new Carousel("canvas-imageCarousel");
const rugsCarousel = new Carousel("rugs-imageCarousel");

// Sticker gif animation
