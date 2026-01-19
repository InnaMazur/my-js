let myObj = new Object();
let simpleObj = {};
console.log(myObj);
console.log(simpleObj);

let laptopObj = {

    model:'apple',
    ram:'16gb',
    memory:512,
    info:function () {
        console.log(` ${this.model} has ${this.memory}GB`);
        
    }
}
laptopObj.processor ='m2';
console.log(laptopObj);
laptopObj.info();

console.log(` Object info ${laptopObj.model} second variant ${laptopObj['memory']}`);

delete laptopObj.processor;
delete laptopObj.memory;
console.log(laptopObj);

let objInfo = {
    age:45,
    emailInfo: 'test@fjrklvof',
    friends:['Tom','Bob'],
    isStudy: true,
    skills:[
        {skillName:'HTML', rating :4.5},
        {skillName:'Css', rating :4}
    ]
}
console.log(objInfo);


// let myVar = 'Test';
// console.log(oldWay);
// var oldWay = 'my value';
// let oldWay = 'my value';


let x = 5;
if(true){
    let x = 55
    // console.log(x);

}
for(let i = 0; i<3; i++){
    // console.log(i);
}
// console.log(`Value from ${i}`);
console.log(x);


const PI = 3.14;
// PI = 3.1;


const userObj = {
    user:'Name',
userPhone: '12345'
}

userObj.userEmail = 'test@shcjkd';
delete userObj.userPhone
console.log(userObj);
// userObj = 111;

const myArr = [1,2,3];
myArr.push(4);
myArr[0]=11;
console.log(myArr);



// let myARR = ['Tom',1,12,true,'string'];

let myA = [
    {userNAme:'Bob', age:40,},
    {userNAme:'Ali', age:29}
]; 
for (const value of myA){
    // console.log(`For of info from ${value}`);
    console.log(`User info from ${value.userNAme} has age ${value.age}`);
}
let obj = {
    a:1, 
    b:2,
    c:3
}
for(const key in obj){
console.log(` For in work ${key} info ${obj[key]}`);
if(obj.hasOwnProperty(key)){
    console.log(` For in work ${key} info ${obj[key]}`);

}
}

//2
const person ={
    name:'Jone',
     age :25,
     occupation :'Developer' 
};
for(const key in person){
    console.log(person[key]);
}


//3
const student = [
{ name: 'Alice', age: 20, grade: 'A' },

{ name: 'Bob', age: 22, grade: 'B' },

{ name: 'Charlie', age: 21, grade: 'C' }

];
for(const value of student){
    console.log( `${value.name} has ${value.age} age and has grade ${value.grade}`);
}

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    
    { name: 'Bob', age: 22, grade: 'B' },
    
    { name: 'Charlie', age: 21, grade: 'C' }
    
    ];
    for( const key in students){
        console.log(students[key]);
    }

 