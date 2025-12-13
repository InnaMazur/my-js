
//1
for (let i=0; i<5; i++){
    console.log(i);
}

//1.1

var message = 'test'; 
function example() {
    if(true){
        var message = 'Hello, world!';
    console.log(message);
    
}
console.log(message);

}
example();
console.log(message);

//1.2

let Message = 'test'; 
function Example() {
    if(true){
        let Message = 'Hello, world!';
    console.log(Message);
    
}
console.log(Message);

}
Example();
console.log(Message);

//1.3

const mEssage = 'test'; 
function eXample() {
    if(true){
        const mEssage = 'Hello, world!';
    console.log(mEssage);
    
}
console.log(mEssage);

}
eXample();
console.log(mEssage);



//2

const person ={
    name:'Jone',
     age :25,
     occupation :'Developer' 
};

for(const key in person){

    console.log(person[key]);
};


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
        { name: 'Alice' , age: 20, grade: 'A'},
        
        { name: 'Bob', age: 22, grade: 'B' },
        
        { name: 'Charlie', age: 21, grade: 'C' }
        
        ];
        for( const key in students){
            console.log(students[key]);
        }


