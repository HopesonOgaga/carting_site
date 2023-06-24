const slidesContainer = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".nav_left");
const prevButton = document.querySelector(".nav_right");
// number increment
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const numberBtn = document.querySelector(".number_btn");
// classes
const cart_image = document.querySelector(".cartimage");
const check_div = document.querySelector(".checkdiv");
// cart number manipulation
const cart_number = document.querySelector(".cart_number");
const cart_mul = document.querySelector(".cart_mul");
const span_number = document.querySelector(".span_number");
const cart_value = document.querySelector(".cart_value");
const cart_final = document.querySelector(".cart_final");

let incNumber = 0;
//cart function
const number = span_number.textContent;
const number_value = Number(number);
cart_number.textContent = `$${number_value}.00`;

// classes
check_div.classList.add("hidden");
cart_image.addEventListener("click", function () {
  check_div.classList.toggle("hidden");
});
// btn functions
function inc_number() {
  incNumber = incNumber + 1;
  console.log(incNumber);
  numberBtn.textContent = incNumber;
  cart_mul.textContent = incNumber;
  cart_new = 128 * incNumber;
  cart_final.textContent = cart_new;
}

increment.addEventListener("click", inc_number);
decrement.addEventListener("click", function () {
  if (incNumber > 0) {
    incNumber -= 1;
    cart_mul.textContent = incNumber;
  }
  console.log(incNumber);
  numberBtn.textContent = incNumber;
  cart_new = 128 / incNumber;
  cart_final.textContent = cart_new;
});

nextButton.addEventListener("click", () => {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// cart multiplication
