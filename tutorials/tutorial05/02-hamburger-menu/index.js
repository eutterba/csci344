// Your code here.
function toggleMenu() {
  const button = document.querySelector("#menu-toggle");
  const ul = document.querySelector(".nav-links");
  button.classList.toggle("active");
  ul.classList.toggle("active");
}
