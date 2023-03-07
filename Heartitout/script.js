const selectBtn = document.querySelector(".select-btn"),
    secondTime = document.querySelector(".second-time"),
      boxes = document.querySelectorAll(".box-container"); 

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

secondTime.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});









var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });