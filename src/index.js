import Home from "./components/Home";
import Menu  from "./components/Menu";
import About  from "./components/About";

(()=>{
    const arr = [Home, Menu, About];
    let nav = document.querySelector('nav');
    arr.forEach(page => {
        let p = document.createElement('div');
        p.textContent = page.name;
        p.addEventListener('click', ()=>{
            let content = document.querySelector('#content');
            content.innerHTML = "";
            content.textContent = page.name;
        })
        nav.appendChild(p);
    })
    Home.render();
})();




