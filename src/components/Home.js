import '../assets/styles.css';
const __content = document.querySelector('#content')

const Home = (()=>{

    const render = ()=>{
        __content.innerHTML = "";
        let div = document.createElement('div')
        div.innerText = "this is home"
        __content.append(div)
    };

    return { render }
    
})();

export default Home;