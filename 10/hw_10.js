

//Math.min

function getMin(a,b,c) {
    return Math.min(a,b,c);
    
}
console.log(getMin(11,8,5));

//Math.max

function getMax(a,b,c) {
    return Math.max(a,b,c);
    
}
console.log(getMax(11,8,5));



//Math.pow


function getPow(number,degree) {

    return Math.pow(number,degree);
    
}
console.log(getPow(4,2));
console.log(getPow(3,4));


//Math.floor

function getMathFloor() {
    return Math.floor(Math.random() * 10);
    
}
console.log(getMathFloor());


//Math.ceil

function getMathCeil() {
    return Math.ceil(Math.random() * 10);
    
}
console.log(getMathCeil());


//Date.getYear

function getMyYear(age) {
    let currentYear = new Date().getFullYear();
    return currentYear - age;
    
}
console.log(getMyYear(35));


//Date.toLocaleString

let nowDate = new Date();

console.log(nowDate);

let DateToLocaleString = nowDate.toLocaleString();

 console.log(DateToLocaleString);


 //String.split and UpperCase

 let getString = 'This is an example';
 let getSplitArr = getString.split(' ');

 for(let i =0; i <getSplitArr.length; i++ ){
    getSplitArr[i] = getSplitArr[i].toUpperCase();
 }
 console.log(getSplitArr);



 //Game


 function ourGame() {

    let options = ['камень', 'ножницы', 'бумага'];

    let computerChoise = options[Math.floor(Math.random()*3)]

    let userChoise = prompt(' Choose any of : камень, ножницы, бумага').trim().toLowerCase();

    if(!options.includes(userChoise)){

        alert ('Choose one of the words');
        return;
    }

    if(computerChoise  === userChoise){
        alert ('Ничья')
    }

    else if( (userChoise === 'камень'  && computerChoise === 'ножницы') ||
    
    (userChoise === 'ножницы' && computerChoise === 'бумага' ) ||
   
    (userChoise === 'бумага' && computerChoise === 'камень')
)
    
    { 
        alert (`Выиграш `);
    }
    
    else{
        alert('Проиграш')
    }

 }

   ourGame();

