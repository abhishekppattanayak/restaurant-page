import '../assets/styles.css';
const __content = document.querySelector('#content')

const About = (()=>{

    const render = ()=>{
        __content.innerHTML = "";
        let div = document.createElement('div')
        div.innerText = "who are you?"
        __content.append(div)
    };

    return { render }
    
})();

export default About;