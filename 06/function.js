function showInfo(userNumber='Test name'){
console.log(`===`);
console.log(`Helo user ${userNumber}`);
console.log(`===`);
}

// showInfo(1);
// showInfo(2);
// showInfo(3);
// showInfo();
// showInfo('Tom');

function sumTwonumbers(a,b) {
    return a+b;
    
}
sumTwonumbers(2,3);
console.log(` Result 2+3 =${sumTwonumbers(2,3)}`);
console.log(` Result 3+3 =${sumTwonumbers(3,3)}`);






function sayYes(value) {
    console.log(`Say Hi user ${value}`);
    
}
let sayNo = function(value){
    console.log(`Say goodbye ${value}`);
}

function checkAccess( userName, yesFn, noFn) {
    if(userName=='Admin'){
        yesFn(userName);
    }
    else{
        noFn(userName);
    }
    
}
checkAccess ('Admin', sayYes, sayNo);
checkAccess ('Nom', sayYes, sayNo);
checkAccess ('Bob', sayYes, sayNo);




// function sum(a,b) {
//     return a+b;
    
// }

// let sum = (firstNumber,secondNumber)=> firstNumber + secondNumber;

let sum = (firstNumber,secondNumber)=>{
    if(firstNumber>secondNumber){
        return firstNumber+secondNumber;
    }
    else{
        return `firstNumber < secondNumber`
    }
};


console.log(`Test version ${sum(4,3)}`);



let firstUser = 'Nom';
let secondUser = 'Bob';
let myFirstArray = [firstUser,secondUser,'info about user', true, 100];
let mySecondArray = new Array();
mySecondArray [0] = 'First value';
mySecondArray[1]=secondUser;
mySecondArray[2]= '093758382';

myFirstArray[0] ='new user';
console.log(myFirstArray);
console.log(mySecondArray);


let emptyArr = new Array (10);
console.log(emptyArr);

let users = [firstUser,secondUser, 'Ros', 'Nick', 'Fara'];
console.log(users.length);
for(let i =0;  i<users.length; i++){
    // console.log(` hello user: ${users[i]}`);
if(users[i]=='Nick'){
    users[i]=' Ros';
}
}

console.log(users);

let moreUsersData = [
    ['Tom', 'email@dhfkdkjskd', 23],
    ['Nick', 'tesr@DHJFJFKF', 25]
];
console.log(moreUsersData[0][1]);
for ( let i=0; i<moreUsersData.length; i ++){
// console.log(moreUsersData[i]);

for(let c=0; c<moreUsersData[i].length; c++){
    console.log(`User info ${moreUsersData[i][c]}`);
}
console.log('=======');
}