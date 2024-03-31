import Home from "./components/Home";
import Menu  from "./components/Menu";
import About  from "./components/About";
import './assets/styles.css';

// document.querySelector('body').classList.add('bg-black');

(()=>{
    const arr = [Home, Menu, About];
    let nav = document.querySelector('nav');
    let content = document.querySelector('#content');
    content.classList.add('flex ')
    arr.forEach(page => {
        let p = document.createElement('div');
        p.textContent = page.name;
        p.addEventListener('click', ()=>{
            content.innerHTML = "";
            content.innerHTML = page.name;
        })
        nav.appendChild(p);
    })
    content.innerHTML = Home.name;
})();




