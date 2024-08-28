const menu = document.querySelector("#menu");
const menuClose = document.querySelector("#menu-close");
const mobileMenu = document.querySelector("#mobile-menu");

menu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  if (!mobileMenu.contains(event.target) && event.target !== menu && !menu.contains(event.target)) {
    mobileMenu.classList.remove("active");
  }
});