console.log('Hello 1');


let counter = 1;
do{
    // console.log(`Hello ${counter}`);
    document.write(` <h3>Hello ${counter}</h3>`);
    counter++;
}while(counter<10);


let whileCounter = 0;
while(whileCounter<5){
    console.log(`Counter value ${whileCounter}`);
    whileCounter++;
}


for(let i=0; i<10; i++){
    // if(i===5){
    //     break;

    // }

if(i%2===0)

{continue;}
    console.log(`For loop value ${i}`);
}