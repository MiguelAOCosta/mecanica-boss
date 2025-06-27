const hamburger = document.querySelector(".menu-hamburger")
const navBar = document.querySelector(".menu-list")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navBar.classList.toggle("active")
})
