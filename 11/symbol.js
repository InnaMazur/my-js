
let keyValue = Symbol('key');
console.log(keyValue);

let nextKey = Symbol('key');
console.log(` Test ${keyValue === nextKey}`);
console.log(` Test ${keyValue === nextKey}`);

//Spread

let firstArr = [1,2,3];
let secondArr = [...firstArr,4,5,6];
console.log(secondArr);

let firstObj = {
    userName:'Tom',
    userAge:111
}

let secondObj = {
    ...firstObj,
    skill:'JS'
}
console.log(secondObj);


//Rest

function restFn(...arg) {
    console.log(arg);
    
}
restFn(3,4,5,6);

console.log(Math.min(...secondArr));
console.log(Math.max(...secondArr));

const person = {
    firstName:'John',
    lastName:'Doe'
}
console.log(person.firstName);


const {firstName,lastName} = person;
console.log(` Get info ${firstName} and ${lastName}`);


let dataArr = ['name Tom', 'age 20','HTML','SCC'];

const [name,age,...skills] = dataArr
console.log(skills);
console.log(`User info ${name} and ${age}`);


const hero = {
    heroName:'Betman',
    realName:'Bruce',
    // suitColor:'red'
}

const{heroName,realName, suitColor =' black'} = hero;
console.log(heroName,realName, suitColor);


const heroes = [
    { name:'Batman'},
    {name:'Joker'}
];

for(const{name} of heroes){
    console.log(name);
}

const textInfo = heroes.map(
    function ({name}) {
        return  `This hero name ${name}`
    }
)
console.log(textInfo);



let testNumber = 42;
console.log(`Test data type ${typeof testNumber}`);

let testString = '42';
console.log(`Test data type ${typeof testString}`);

let testBoolean = true;
console.log(`Test data type ${typeof testBoolean}`);

let testObj = {
    key:'test'
};
console.log(`Test data type ${typeof testObj}`);

let nullValue = null
console.log(`Test data type ${typeof nullValue}`);

let arrValue = [1,2];
console.log(`Test data type ${typeof arrValue}`);

let symbolValue = Symbol('key');
console.log(`Test data type ${typeof symbolValue}`);

let fnValue = ()=>'helo';
console.log(`Test data type ${typeof fnValue}`);

let underfinedValue = undefined;
console.log(`Test data type ${typeof underfinedValue}`);