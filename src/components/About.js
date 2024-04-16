import '../assets/styles.css';
const __content = document.querySelector('#content')

const About = (()=>{

    const render = ()=>{
        __content.innerHTML = "";
        let div = document.createElement('div')
        
        let h1 = document.createElement('h1')
        h1.innerText = "About me"
        h1.classList.add('text-center', 'text-3xl', 'font-bold', 'my-8')
        
        let p = document.createElement('p')
        p.innerText = "Hello👋, there! This website was made as a learning step for web development. I'm grateful to The Odin Project community for providing such an excellent path to learn."
        p.classList.add('my-4', 'font-lg', 'lg:mx-64', 'md:mx-24', 'mx-12', 'text-center')
        
        let dis = document.createElement('p')
        dis.innerText = "This website is made for educational purposes only."
        dis.classList.add('font-thin', 'text-center', 'italic', 'text-base')

        let span = document.createElement('span')
        span.innerText = `Copyright © ${new Date().getFullYear()} abhishek`
        span.classList.add('text-center', 'text-sm', 'w-full', 'block', 'mt-24')

        div.appendChild(h1)
        div.appendChild(p)
        div.appendChild(dis)
        div.appendChild(span)
        __content.append(div)
    };

    return { render }
    
})();

export default About;