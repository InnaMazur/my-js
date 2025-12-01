let thisYear = 2023;
if(thisYear===2023){
    alert(` This yeat 2023`);
}
else{
    console.log(`Hello from else`)
    alert(`Another year`);
}
console.log(`Hello from code`);
alert(`not if`);

let compareValue = true
if(compareValue){
    console.log(`Never run`);
}

let userNumber = 6;
if(userNumber<4){
    console.log(`less 4`);
}

else if(userNumber>5 && userNumber<10){
    console.log(`>5 and <10`);
}
else if(userNumber>10 && userNumber<12){
    console.log(`>10 and <12`);
}
else{
    compareValue.log(` another user`);
}
let userIsAdmin = false;
if(!userIsAdmin){
    console.log(`Hello admin`);
}
// else{
//     console.log(`Hello no admin`)
// }
let result = ``;
let userLogin =true;
if(userLogin){
    result=`Hello user`;
}
else{
    result=`Login to system`;
}
// result = userLogin ? `Hello user`: `Login else`;
console.log(`result value ${result}`);

// let firstValue = 10;
// let secondValue = 50;
// let maxValue = 0;
// maxValue = firstValue>secondValue?firstValue: secondValue;
// console.log(` max value ${maxValue}`)