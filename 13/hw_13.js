
// 1
window.onload = function(){
    let treeEl = document.querySelector('#tree');
    let [...firstLevel] = treeEl.children;
    console.log(firstLevel.length);

let secondLevel = 0;
for(let i = 0; i<firstLevel.length; i++){
    secondLevel += firstLevel[i].children.length;
}
console.log(secondLevel);



//2


const booksArr = [
  {  title : " Приключения Алисы в стране чудес",
    year: 1865,
    rating: 4.5
  },
  {
    title: '1984',
    year: 1949,
    rating:4.8
  },
 { title: 'Гарри Поттер и философский камень',
    year: 1997,
    rating:4.7
 }

];
let table = document.querySelector('table');
for( let book of booksArr){
    let row = document.createElement('tr');
    let titleCell = document.createElement('td');
    let yearCell = document.createElement('td');
    let ratingCell = document.createElement('td');

titleCell.textContent = book.title;
yearCell.textContent = book.year;
ratingCell.textContent = book.rating;

row.appendChild(titleCell);
row.appendChild(yearCell);
row.appendChild(ratingCell);

table.appendChild(row);

}


//3


const elementsArray = [
    { tag:'p', text:'Element 1' },
    { tag:'div', text:'Element 2'},
    {tag:'span', text:'Element 3'}
];
let container = document.getElementById('container');
function createEl(item) {
    let element = document.createElement(item.tag);
    element.textContent = item.text;
    container.append(element);
    
}
for(let i =0; i<elementsArray.length; i++){
    createEl(elementsArray[i]);
}


//4


const elementArray = [
    {text:'Element 1', usePrepend:true},
    {text:'Element 2', usePrepend:false},
    {text:'Element 3', usePrepend:true}
];

let containers = document.getElementById('containers');
function createP(item) {
    let p =document.createElement('p');
    p.textContent = item.text;

   if(item.usePrepend){
    containers.before(p);

   } 
   else{
    containers.after(p);
   }
}
for (let i = 0 ; i< elementArray.length; i++ ){
    createP(elementArray[i]);
}










}



