
//1 - 2

class Person {
    constructor(name,age){
        this._name = name;
        this._age = age;

    }

    sayHello(){
        console.log(` Hi, I am ${this._name} and I am ${this._age} years old.`);
    }
}

let person = new Person ('John', '30');
console.log(person);
person.sayHello();


//3

class Student extends Person {
    constructor (name, age, studentId){
        super(name,age);
        this._studentId = studentId;
    }

    study(){
        console.log(`My name is ${this._name} and I have ${this._studentId}`);
    }
}

let student = new Student ('John', '30','ID: 12345');
console.log(student);
student.study();

