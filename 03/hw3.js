// Задание 1

let firstNumber = 10;
let secondNumber = 10;
alert (`the same numbers: ${firstNumber===secondNumber}`);

// Или

let a = 10;
let b = 12;
let compareResult = a === b;
alert( ` Numbers are the same: ${compareResult}`)



// Задание 2

let user = Number(prompt('Put a number'));
console.log(` Чётное число: ${user % 2 === 0}`);


// Или

let person = Number(prompt('Put a number'));
if ( person % 2 ===0)
{console.log('Четное число');}
else{console.log ('Нечетное число')};

// Задание 3

let userAge = Number(prompt('Put a number'));
if (userAge < 18)
{alert( ` Do not use!`)};

// Или
let personAge = Number(prompt('Put a number'));
let checkAge = ` Person can use this page becourse he has 18 years: ${personAge >= 18}`;
console.log(checkAge)



// Задание 4


let price =  Number(prompt('Put a price'));
let quantity = Number(prompt('Put a quantity'));
let total = price * quantity;
console.log(` Total price: ${total}` );



// Задание 5 

let ourPrice = Number(prompt('Put a number'));
let discount =  ourPrice / 100 * 50;
let totalPrice = ourPrice - discount;
alert(`Final price: ${totalPrice}`);









