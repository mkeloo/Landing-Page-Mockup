// Select the Elements
var toggle_btn
var big_wrapper
var hamburger_menu

function declare() {
  toggle_btn = document.querySelector(".toggle-btn")
  big_wrapper = document.querySelector(".big-wrapper")
  hamburger_menu = document.querySelector(".hamburger-menu")
}

const main = document.querySelector("main")
declare()

let dark = false

function toggleAnimation() {
  dark = !dark

  // Clone the wrapper (landing page)
  let clone = big_wrapper.cloneNode(true)

  // Changing the color
  if (dark) {
    clone.classList.remove("light")
    clone.classList.add("dark")
  } else {
    clone.classList.remove("dark")
    clone.classList.add("light")
  }

  // Cloning the other theme
  clone.classList.add("copy")
  main.appendChild(clone)

  //   Stop-Scrolling
  document.body.classList.add("stop-scrolling")

  // removing unwanted big_Wrapper after the animation
  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling")
    big_wrapper.remove()
    clone.classList.remove("copy")

    // Reset the Variables
    declare()
    events()
  })
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation)
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active")
  })
}
events()
