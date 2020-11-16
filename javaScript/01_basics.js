// This is my first js code!

console.log('Hello World');

//--------variables---------

// Cannot be reserved keyword
// Should be meaningful
//Cannot start with a number
// Cannot contain a space or hyphen(-)
// Are case-sensitive(camal case)

let firstName = 'Suvendu';
let lastName = 'roy';
console.log(firstName);

//---------Constants-------

const interestRatte = 0.3;
// interestRatte = 1;
// if we declear as 'const' instade of 'let' we cannot change its value
console.log(interestRatte);

//-----Primitive Type----

let name = 'Sanju'; //String Literal
let age = '22'; //Number Literal
let isAproved = true; // Boolean Literal
let town = undefined; //undifined Literal
let state = null; // null Literal

//----Dynamic Typing------

//--------Objects---------

let person = {
  name: 'Joga',
  age: 25,
};
console.log(person);

// Dot Notation
person.name = 'Moga';
console.log(person.name);

// Bracket Notatinon
person['name'] = 'Marry';
console.log(person.name);

let selection = 'name';
person[selection] = 'Harry';
console.log(person.name);

//--------Arrays-----------

let selectedColours = []; //empty array
selectedColours = ['Red', 'Green'];
console.log(selectedColours); //to print the whole
console.log(selectedColours[0]); //to print particular position
console.log(selectedColours.length); //to ptint length of the array
selectedColours[2] = 'Blue'; //dynamically add another value
console.log(selectedColours[2]);

selectedColours[3] = 5; //array can contain diff type of variables also can be an object
selectedColours[4] = person;
console.log(selectedColours);

//----------Functions------------

function greet() {
  console.log('Hi, Good Night!!');
}
greet();

function greet0(num) {
  console.log('Good Night ' + num);
}
greet0('Sanju');
greet0('Marry');

function greet1(num1, num2) {
  console.log('Good Night ' + num1 + ' ' + num2);
}
greet1('Sanju'); // As we don't pass the 2nd value here it gonna show undefined
greet1('Marry', 'Jhons');

//Caculate a value

function squre(no) {
  return no * no;
}
console.log('The squre of 3 is ' + squre(3));
