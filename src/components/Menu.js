import '../assets/styles.css';
const __content = document.querySelector('#content')

const Menu = (()=>{

    const assign = {
        'Beverage': 'teal',
        'Snacks': 'amber',
        'Desserts': 'blue'
    }

    const item = (title, kind, price)=>{
        let div = document.createElement('div');
        div.classList.add('rounded-lg', 'py-2', 'px-4', 'outline', 'outline-1', 'flex', 'flex-col', 'justify-center', 'items-center', `bg-${assign[kind]}-200`)
        
        let h1 = document.createElement('h1')
        h1.classList.add('font-bold', 'text-3xl')
        h1.innerText = title
        
        let h2 = document.createElement('h2')
        h2.classList.add('font-thin', 'italic', 'text-xl')
        h2.innerText = kind

        let span = document.createElement('span')
        span.classList.add('text-2xl')
        span.innerText = price
        
        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(span)

        return div
    }

    const render = ()=>{
        __content.innerHTML = "";
        let div = document.createElement('div')
        div.classList.add('grid','px-36', 'my-12', 'grid-rows-max','grid-cols-[repeat(auto-fit,minmax(240px,1fr))]', 'gap-8')
        div.appendChild(item('Spaghetti','Snacks','$2.31'))
        div.appendChild(item('Tiramisu','Desserts','$4.47'))
        div.appendChild(item('Meatballs','Snacks','$1.33'))
        div.appendChild(item('Orange Juice','Beverage','$3.32'))
        div.appendChild(item('Hamburger','Snacks','$5.63'))
        div.appendChild(item('Ice-cream','Desserts','$3.42'))
        div.appendChild(item('Water','Beverage','$1.24'))
        div.appendChild(item('Coffee','Beverage','$2.50'));
        div.appendChild(item('French Fries','Snacks','$4.20'));
        div.appendChild(item('Cheesecake','Desserts','$4.99'));
        div.appendChild(item('Tea','Beverage','$2.00'));
        div.appendChild(item('Nachos','Snacks','$6.75'));
        div.appendChild(item('Brownie','Desserts','$3.99'));
        div.appendChild(item('Lemonade','Beverage','$2.75'));
        div.appendChild(item('Popcorn','Snacks','$3.50'));
        div.appendChild(item('Apple Pie','Desserts','$5.25'));
        div.appendChild(item('Milkshake','Beverage','$4.50'));
        div.appendChild(item('Pretzels','Snacks','$3.75'));
        div.appendChild(item('Fruit Salad','Desserts','$4.25'));
        div.appendChild(item('Iced Tea','Beverage','$2.25'));
        div.appendChild(item('Onion Rings','Snacks','$4.99'));
        div.appendChild(item('Chocolate Mousse','Desserts','$5.75'));   

        __content.append(div)
    };

    return { render }
    
})();

export default Menu;