import About from "./components/About"
import Menu from "./components/Menu"

const __menu = document.querySelector('#menu')
const __about = document.querySelector('#about')

__about.addEventListener('click', About.render)
__menu.addEventListener('click', Menu.render)

Menu.render()
