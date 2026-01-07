window.onload = function () {
    
//1

// let formEl = document.querySelector('form');
// let colorRes = document.querySelector('span');
// let [...radioButtons] = document.querySelectorAll('input[name="color"]');
// formEl.addEventListener('change', ()=>{
// let selectColor = '';

// for (const radiobutton of radioButtons){
//     if(radiobutton.checked){
//         selectColor = radiobutton.value;
//         break;
//     }
// }
// colorRes.innerText = selectColor;


// });



//2

let resultBtn = document.querySelector('.showResult');
let resultBox = document.querySelector('.resultBox');

let [...checkboxes]= document.querySelectorAll('input[name="hobby"]');

resultBtn.onclick = function(){
    resultBox.innerHTML = '';
  let checkedValues =[];

checkboxes.forEach(item=>{
    if(item.checked){
        checkedValues.push(item.value);
    }
});

checkedValues.forEach(item=>{
    let pEl = document.createElement('p');
    pEl.innerText = item;
    resultBox.appendChild(pEl)
});

}


//3

let selectEl = document.querySelector('#city');
let cityRes = document.querySelector('.cityResult');
selectEl.addEventListener('change', function(){
    cityRes.innerText = this.value;
});


//4

let form = document.querySelector('#ratingForm');
let result = document.querySelector('#result');
form.addEventListener('change', function(e){
    let value = event.target.value;

    result.textContent = `Your rate is ${value}. Thanks for your rate!`;
});


//5

// let form = document.getElementById('pizzaForm');
// let priceEl = document.getElementById('price');

// let sizePrice = {
//     small: 0,
//     medium: 50,
//     large: 100
// };

// let toppingPrice = 25;

// form.addEventListener('change',calculatePrice);
// function calculatePrice(){
//     let total = 0;

//     let size = form.querySelector('input[name="size"]:checked');
//     if(size){
//         total+= sizePrice[size.value];
//     }
 
//     let toppings = form.querySelectorAll('input[name="topping"]:checked');

//     total+= toppings.length * toppingPrice;

//     priceEl.textContent = total;
// }



}
