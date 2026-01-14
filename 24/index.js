
//4
import {add, subtract,multiply,divide} from './mathOperation.js';

console.log(add(5,4));
console.log(subtract(10,5));
console.log(multiply(6,2));
console.log(divide(12,3));


//5
import { toUpperCase , reverseString} from './stringUtilities.js';

async function userData (userId){
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
   if(!response.ok){
    throw new Error('Mistake here');
   }
   let userData = await response.json();
   console.log(reverseString(userData.name), toUpperCase(userData.email));
    }
    catch(error){
        console.log(error.message);
    }
}
userData(2);