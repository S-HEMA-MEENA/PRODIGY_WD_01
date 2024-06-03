
let search = document.querySelector('.search');

document.getElementById('search').addEventListener('click', () => {
  search.classList.toggle('active');
});

let navbar = document.querySelector('.navbar');

document.getElementById('bar').addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

var swiper = new Swiper(".review-row", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});