const slidesContainer = document.querySelector(".carosel");
const slide = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".nav_left");
const prevButton = document.querySelector(".nav_right");




nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });
  
  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });