console.log("Hello JS 2");
let userName = 'stringValue';
let productPrice = 100;
let isAdmin = true
console.log(userName);
console.log(productPrice);
console.log(isAdmin);
console.log("Is user admin? ", isAdmin);
// let result=userName+productPrice;
let result = ` Hello template literal ${userName} has saleValue  more info about user ${
    isAdmin} math operatin 2+2=${2+2}`;
console.log("result", result);