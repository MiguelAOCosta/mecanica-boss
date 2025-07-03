//Menu

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

//Galeria de imagens

const sliderItems = document.querySelectorAll(
  ".slider .slider-list .slider-item"
)
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const thumbnail = document.querySelectorAll(".thumbnail .thumbnail-item")

let countItem = sliderItems.length
let itemActive = 0

nextBtn.addEventListener("click", () => {
  itemActive += 1

  if (itemActive >= countItem) {
    itemActive = 0
  }

  showSlider()
})

prevBtn.addEventListener("click", () => {
  itemActive -= 1

  if (itemActive < 0) {
    itemActive = countItem - 1
  }

  showSlider()
})

thumbnail.forEach((item, index) => {
  item.addEventListener("click", () => {
    itemActive = index
    showSlider()
  })
})

let refreshInterval = setInterval(() => {
  nextBtn.click()
}, 5000)

function showSlider() {
  let itemActiveOld = document.querySelector(
    ".slider .slider-list .slider-item.active-slider"
  )
  let thumbnailActiveOld = document.querySelector(
    ".thumbnail .thumbnail-item.active-slider"
  )

  itemActiveOld.classList.remove("active-slider")
  thumbnailActiveOld.classList.remove("active-slider")

  sliderItems[itemActive].classList.add("active-slider")
  thumbnail[itemActive].classList.add("active-slider")

  clearInterval(refreshInterval)
  refreshInterval = setInterval(() => {
    nextBtn.click()
  }, 5000)
}

//Localização
