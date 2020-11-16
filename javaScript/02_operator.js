//----------Arithmetic Operator----------
let x = 24;
let y = 6;
console.log("Addition operator " + (x + y));
console.log("Subtraction operator " + (x - y));
console.log("Multiplication operator " + x * y);
console.log("Divition operator " + x / y);
x = 27;
console.log("Remainder of divition operator " + (x % y));
console.log("Exponentiation operator " + x ** y); // x to the power of y
// Increment or Decrement operator
console.log(x); //27
console.log(x++); //27
console.log(x); //28
console.log(++x); //29

console.log(y); //6
console.log(y--); //6
console.log(y); //5
console.log(--y); //4

//-----Assignment Operator----------
console.log(x);
x += 5;
console.log(x);
// Similar goes for Addition, Subtraction, Multiplication, Divition and Remainder.

//-------Comperision Operator---------
x = 1;

// Relational
console.log(x > 0); //Greater then
console.log(x >= 1); //Greater then equal
console.log(x < 1); //Less then
console.log(x <= 1); //Less then equal
console.log("--------------");

//-------------Equality------------------
console.log(1 === 1); //Strict Equality (Type + Value)
console.log("1" === 1);
console.log(1 == 1); //Lose Equality (Only value)
console.log("1" == 1);
console.log(true == 1);

//--------Ternary Operator------------
//If a customer has more then 100 points,
//they are a 'gold' cusromer, otherwise,
//they are a 'silver' customer.
let points = 110;
let type = points > 100 ? "gold" : "silver";

console.log(type);

//-------------Logical operators--------------
//Logical AND (&&)
//returns true if both operands are true
console.log(true && true);
console.log(false && true); // Like JAVA

//Logical OR (||)
//returns true if one of the operand is true
console.log(false || true);
console.log(false || false); // Like JAVA

//NOT (!)
let state = !true;
console.log(state); //false

//-----------BitWise Operator-------------
// 1 = 00000001
// 2 = 00000010
// | = 00000011(OR)-> 3
// & = 00000000(AND)-> 0
console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //Bitwise AND

// Read (00000100), Write(00000010), Execute(00000001)
const readPermision = 4;
const writePermision = 2;
const executePermision = 1;
let myPermision = 0;
myPermision = myPermision | readPermision | writePermision;
let message = myPermision & readPermision ? "yes" : "no";
console.log(message);
