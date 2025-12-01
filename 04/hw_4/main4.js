
// Задание 1

let firstNumber = Number(prompt(`Put a number`));
let secondNumber = Number(prompt(`Put a number`));
let thirdNumber = Number(prompt(`Put a number`));

if(firstNumber>=secondNumber && secondNumber>=thirdNumber){
    console.log(` First number is the max`);
}
else if (secondNumber>=firstNumber && secondNumber>=thirdNumber){
    console.log(` Second number is the max`);

}
else{
   console.log (`Third number is the max`);
}



// Задание 2
let yourNumber = Number(prompt(`Put a number from 1 to 12`));
if( yourNumber>=1 &&  yourNumber<=12){

     if( yourNumber>=3 &&  yourNumber<=5){
        console.log(`Spring`);

    }
    else if( yourNumber>=6 &&  yourNumber<=8){
        console.log(`Summer`);
        
    }

    else if( yourNumber>=9 &&  yourNumber<=11){
        console.log(`Automn`);
        
    }
    else{
        console.log(`Winter`);
    }

}
else{
    console.log(`wrong number`);
}




// Задание 3

let anyNumber = Number(prompt(`Put any number`));
let anyNumberResult = (anyNumber>0)?'Положительное число':(anyNumber<0)?'Отрицательное число':'Это ноль';
console.log(anyNumberResult);


// Задание 4

let angle = Number(prompt(`Put a number `)); 
let angleResult = (angle>0 && angle<90) ?' Острый угол': (angle>90 && angle<=180)?'Тупой угол':(angle===90)?'Прямой угол':'Другой вариант';
console.log(angleResult);


// Задание 5
let number = Number(prompt(`Put a number `));
if(number>=1 &&number <= 100 ){
if (number>=90 &&number <= 100 ){grade ='A';}
else if 
(number>=80 &&number <= 89 ){grade ='B';}
else if (number>=70 &&number <= 79 ){grade ='C';}
else if (number>=60 &&number <=69 ){grade ='D';}
else{grade='F';}
console.log(`Оценка: ${grade}`);
}
else{
    console.log('Wrong number');
}
let passed= number>=60? 'Зачислен':'Не зачислен';
console.log(passed);

// PostfixIncrement
console.log(`Before: ${number}`);
console.log(`Increase: ${number++}`);
console.log(`After: ${number}`);



