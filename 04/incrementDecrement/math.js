let numberValue = 1;
numberValue = numberValue + 1;
console.log(numberValue);
numberValue+=1;
console.log(numberValue);


let postfixIncrement = 1;
console.log( ` Start value ${postfixIncrement}`);
console.log( ` Call with increment value ${postfixIncrement ++}`);
console.log( ` second call  value ${postfixIncrement }`);
console.log( ` Call with increment value ${postfixIncrement ++}`);
console.log( ` second call  value ${postfixIncrement }`);


let postfixDecrement = 10;
console.log( ` Start value ${postfixDecrement}`);
console.log( ` Call with increment value ${postfixDecrement --}`);
console.log( ` second call  value ${postfixDecrement }`);
console.log( ` Call with increment value ${postfixDecrement --}`);
console.log( ` second call  value ${postfixDecrement }`);

console.log(` Prefix increment decrement`);

let prefixIncrement = 1;
console.log( ` Start value ${prefixIncrement}`);
console.log( ` Call with increment value ${++prefixIncrement }`);
console.log( ` second call  value ${prefixIncrement }`);
console.log( ` Call with increment value ${++prefixIncrement }`);
console.log( ` second call  value ${prefixIncrement }`);


let prefixDecrement = 10;
console.log( ` Start value ${postfixDecrement}`);
console.log( ` Call with decrement value ${--prefixDecrement}`);
console.log( ` second call  value ${prefixDecrement }`);
console.log( ` Call with decrement value ${--prefixDecrement }`);
console.log( ` second call  value ${prefixDecrement }`);
