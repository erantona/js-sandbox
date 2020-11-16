//---------IF_ELSE-----------
//Like other programing language
let hour = 22;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning!!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Evening!!");
} else {
  console.log("Good Night!!");
}

//--------Switch Case----------
//Like other programing language
let role = "guest";
switch (role) {
  case "guest":
    console.log("Guest user");
    break;

  case "power":
    console.log("Power user");
    break;

  case "noob":
    console.log("Noob user");
    break;

  default:
    console.log("Unknown user");
}

//--------For loop------
//Like other programing language
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) console.log("Hello ", i);
}

//---------While loop---------
//Like other programing language
let i = 0;
while (i < 5) {
  console.log("Hello World", i);
  i += 2;
}

//------------do-while loop----------
//Like other programing language
let i = 0;
do {
  if (i % 2 === 0) console.log("Hello world ", i);
  i++;
} while (i < 5);

//-----------for-in-----------//use for objects
const person = {
  name: "Suvendu Roy",
  age: 22,
  hight: "6.0 ft",
};
for (let key in person) {
  console.log(key + " : " + person[key]);
}
const colors = ["red", "green", "blue", "yellow"];
for (let color in colors) console.log(color + " : " + colors[color]);

//-----------for-of-----------//use for array
// we can use it in an array but not in object
//It's lot like for-in loop
const colors = ["red", "green", "blue", "yellow"];
for (let color of colors) console.log(color);

//----------break - continue--------------

let i = 0;
while (i <= 10) {
  if (i === 5) {
    break; //break the loop
  }
  console.log(i);
  i++;
}
while (i <= 10) {
  if (i % 2 === 0) {
    i++;
    continue; //continued to the beginning of the loop
  }
  console.log(i);
  i++;
}
//returning max of array by reduce method 
const nums = [5,1,4,9,2];

const max = getMax(nums);
console.log(max);

function getMax(array){
    if(array.length === 0) return undefined;
    // let max = array[0];
    // for(let key of array){
    //    if(key > max) max = key;
    // }
    // return max;
    return array.reduce((a, c) => (a > c) ? a : c );
}