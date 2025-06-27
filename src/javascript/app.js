const hamburger = document.querySelector(".menu-hamburger")
const navBar = document.querySelector(".menu-list")
const navLink = document.querySelectorAll(".menu-link")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navBar.classList.toggle("active")
})

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navBar.classList.toggle("active")
  })
})
