import '../assets/styles.css';

const Home = (()=>{
    const name = 'Home';

    const render = ()=>{
        let div = document.createElement('div');
        div.classList.add('page');

        return div;
    };
    return { name, render };
})();

export default Home;