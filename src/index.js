import Home from "./components/Home"
import About from "./components/About"
import Menu from "./components/Menu"

const __home = document.querySelector('#home')
const __menu = document.querySelector('#menu')
const __about = document.querySelector('#about')

__home.addEventListener('click', Home.render)
__about.addEventListener('click', About.render)
__menu.addEventListener('click', Menu.render)

Home.render()
