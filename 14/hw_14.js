//2


window.onload =function ( ){

let headerEl = document.createElement ('header');

headerEl.style.padding = '50px';
headerEl.style.backgroundColor = 'yellow';
headerEl.style.textAlign = 'center';
document.body.prepend(headerEl);
console.log(headerEl);

//3 - 4


const menuData = [
    {name:'Головна', url:'/'},
    {name:'Про нас', url:'/about'},
    {name:'Послуги', url:'/services'}

]
const header = document.querySelector('header')
 menuData.forEach(item=>{
    const link = document.createElement('a');
    
    link.textContent = item.name;
    link.href = item.url;
    link.target = '_blank';

    header.appendChild(link);
 })


 //5 - 6 - 7

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  
}

 function createDivs() {
    const containerEl = document.createElement('div');
    containerEl.classList.add('container');
    containerEl.style.display = 'flex';
    containerEl.style.flexWrap = 'wrap';
    containerEl.style.width = '900px';
    containerEl.style.margin = '0 auto';

    for (let i = 1; i <= 50; i++) {
        const divEl = document.createElement('div');
        divEl.style.width = '50px';
        divEl.style.height = '50px';
        divEl.style.borderRadius = '100%';
        divEl.style.backgroundColor = getRandomColor();

        containerEl.appendChild(divEl);

 }

    document.body.appendChild(containerEl);
}
createDivs();

let [...divs] = document.querySelectorAll('.container div');
divs.forEach(div=>{
    div.classList.add('.circle-elemt');
})


    
}