window.onload = function(){


let formEl = document.querySelector('form');
let outputRes = document.querySelector('span');
// outputRes.innerText = 'any select size';
let [...radioButtons]= document.querySelectorAll('input[name="size"]');
formEl.addEventListener('change',()=>{

    let selectSize = '';

    for(radiobutton of radioButtons){
        if(radiobutton.checked){
            selectSize = radiobutton.value;
            break;
        }
    }

// outputRes.innerText = selectSize ? ` select ${selectSize}` :`Any select`;

outputRes.innerText = selectSize ;

});

//2
let checkBoxEl = document.querySelector('#accept');

checkBoxEl.addEventListener('change', function(){
    if(this.checked){
        alert('Rules accept');
    }
    else{
        alert('Accept false');
    }
});


//3

let resultBtn = document.querySelector('.showResult');
let resultBox = document.querySelector('.resultBox');
// let [...checkboxes]= document.querySelectorAll('input[name:"Transport"]:checked');

let [...checkboxes]= document.querySelectorAll('input[name="transport"]');
let checkedValues = [];
resultBtn.onclick  =function(){
    resultBox.innerHTML = "";
    checkedValues = [];
        checkboxes.forEach(item=>{
        if(item.checked){
checkedValues.push(item.value);
        }
    });

    checkedValues.forEach(item=>{
        let pEl =document.createElement('p');
        pEl.innerText = item;
        resultBox.appendChild(pEl);
    });

};

//4

let selectEl =document.querySelector('#skills');
let skillRes = document.querySelector('.skillResult');
selectEl.addEventListener('change', function(){
    skillRes.innerText = this.value;

});


}











































