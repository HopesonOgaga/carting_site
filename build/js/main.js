const slidesContainer = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".nav_left");
const prevButton = document.querySelector(".nav_right");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const numberBtn = document.querySelector(".number_btn");
const cart_image = document.querySelector(".cart_image");
const check_div = document.querySelector(".check_div");

let incNumber = 0;

cart_image.addEventListener("click", function () {
  check_div.classList.toggle("hidden");
});
// btn functions
increment.addEventListener("click", function () {
  incNumber = incNumber + 1;
  console.log(incNumber);
  numberBtn.textContent = incNumber;
});

decrement.addEventListener("click", function () {
  if (incNumber > 0) {
    incNumber -= 1;
  }
  console.log(incNumber);
  numberBtn.textContent = incNumber;
});

nextButton.addEventListener("click", () => {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
