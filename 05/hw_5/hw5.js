// Задание 1

let figure ='круг';

switch (figure) {
    case 'квадрат':
       case 'Квадрат':
       case 'КВАДРАТ':
        console.log('У квадрата 4 стороны');
        break;

case 'треугольник':
    case 'Треугольник':
        case 'ТРЕУГОЛЬНИК':
        console.log('У треугольника 3 стороны');
break;

case 'круг':
    case 'Круг':
        case 'КРУГ':
            console.log('У круга нет сторон');
            break;
    default:
        console.log(`Any info about ${figure}`);
        break;
}



// Задание 2

let myNumber = 1;
let sum = 0 ;
while( myNumber <= 20){
    if( myNumber%2===0){

      sum += myNumber;
    }
    myNumber++;
}
console.log(sum);



// Задание 3


let number = 5;
for(let i =0; i<10; i++){
    console.log(` Result  ${i}* ${number}= ${i*number}`);
}

// Задание 4

for( let i =10; i >-1; i --){
    console.log(i);
}


// Задание 5

let anyNumber = Number(prompt(`Put any number`));
for( let i=0; i < anyNumber; i++){
    if(i%2===0){ console.log(`Парное число ${i}`);}
    else{
        console.log(`Не парное число ${i}`);
    }
}
// Задание 6

for( let i =1; i<=10; i++){
if(i%2===0){
    console.log(i);
break ;
}

console.log(i);
}


// Задание 7

for (let b = 1; b<= 10; b++){
    if(b % 2 == 1){
          continue;
    }
       console.log(b);
}