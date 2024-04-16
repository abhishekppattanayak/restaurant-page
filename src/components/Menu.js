import '../assets/styles.css';
const __content = document.querySelector('#content')

const Menu = (()=>{

    const render = ()=>{
        __content.innerHTML = "";
        let div = document.createElement('div')
        div.innerText = "menu please"
        __content.append(div)
    };

    return { render }
    
})();

export default Menu;