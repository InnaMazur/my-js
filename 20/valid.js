
window.onload =function(){

//1

let phoneNumber = '+380970463726';//12
let shortPhone = '970453724';//9

let phoneReg = /^\+?\d{9,12}$/;

// if(phoneReg.test(phoneNumber)){
//     alert('Valid');
// }
// else{
//     alert('Invalid');
// }

let emailValue = 'test_user@gmail.com';
let emailReg = /^[a-zA-Z._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;

// if(emailReg.test(emailValue)){
//     alert('Valid');
// }
// else{
//     alert('Invalid');
// }


//2

let changeBtn = document.querySelector('button');
changeBtn.onclick = function(){

    let root = document.documentElement;
    let currentBg = getComputedStyle(root).getPropertyValue('--bg-color');
    if(currentBg==='green'){

    root.style.setProperty('--bg-color', 'red');
    root.style.setProperty('--text-color', 'white');
    root.style.setProperty('--title-color', 'yellow');
    }
    else{
        root.style.setProperty('--bg-color', 'green');
        root.style.setProperty('--text-color', 'yellow');
        root.style.setProperty('--title-color', 'white');
    };
  
}

//3
let user = {
    userName:'Tom',
    userAge:22
}

try{
//     let myValue = 'Hello try';
// console.log(myValue);
if(!user.userAge){
    throw new  SyntaxError('No info');
}

}
 catch(error){
    console.log(error);
    console.log(`Hello ${error.message}`);
    console.log(`Hello ${error.name}`);
    console.log(`Hello ${error.stack}`);

 }

 finally{
    console.log('Finally works every time');
 }


//4

function showAlert(){
    alert('Hello world');
}

let timeOutAlert = setTimeout(showAlert,5000);
let btnEl = document.querySelector('button')
btnEl.onclick = function(){
    clearTimeout(timeOutAlert);
}
setTimeout(function(){
    console.log('Hello set timeout');
},3000);



// let counter = 0;
// function count(){
//     counter++;
//     document.querySelector('p').innerHTML = counter;
// }
// setInterval(count,1000);

let counter = 0;
function count(){
    counter++;
    document.querySelector('p').innerHTML = counter;
    if(counter>30){
        clearInterval(intervalCounter);
        alert('Stop count')
    }
}
let intervalCounter = setInterval(count,1000);








}