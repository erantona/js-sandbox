//---------ARRAY-----------
//Add element
const num1 = [3, 4];
//End
num1.push(5, 6);
console.log(num1);
//Beginning
num1.unshift(1, 2);
console.log(num1);
//Middle
num1.splice(4, 0, "a", 1, "b");
console.log(num1);

//Finding element(value type)
console.log(num1.indexOf("z")); //-1
console.log(num1.indexOf("1")); //-1 as its a char
console.log(num1.indexOf(1)); //0
console.log(num1.lastIndexOf(1)); //6
console.log(num1.indexOf(1, 3)); //it will start searching from 3rd pos

console.log(num1.indexOf(1) !== -1); // if it return true means number is in the array
console.log(num1.includes(1));

//Finding element(Reference type)
const students = [
  { id: 1, name: "Mohan" },
  { id: 2, name: "Robin" },
  { id: 3, name: "Salim" },
];
// console.log(students.includes({ id: 2, name: "Robin" })); //it wont work

const student = students.find(function (student) {
  return student.id === 2;
});
console.log(student);

const student1 = students.findIndex(function (student) {
  return student.id === 2;
});
console.log(student1);
//Arrow function
const student3 = students.find((student) => student.id === 2);
console.log(student3);

//Removing element
const num9 = [1, 2, 3, 4];

//End
let ele = num9.pop();
console.log(num9);

//Begining
ele = num9.shift();
console.log(num9);

//Middle
ele = num9.splice(1, 1);
console.log(num9);

//Emptying an array
let num2 = [1, 2, 3, 4, 5];
let another1 = num2;

//Solution 1
num2 = [];

//Solution 2
num2.length = 0;

//Solution 3
num2.splice(0, num2.length);

//Solution 4
while (num2.length > 0) num2.pop();

//Combining  And Slicing
const first = [{ id: 1 }];
const second = [1, 2, 3];
// //const second = [4, 5, 6];
const combined = first.concat(second);
const slice = combined.slice(2, 5);
console.log(slice);

//
//
//Spread Operator
const first1 = [1, 2, 3];
const second2 = [4, 5, 6];
const combinedd = [...first1, ...second2];
const copy = [...combinedd];
console.log(copy);

//Iterating an Array
const num3 = [1, 2, 3, 4, 5];

for (let num of num3) console.log(num);

num3.forEach((num) => console.log(num));

//Joining Array
const num4 = [1, 2, 3, 4, 5];
const joined = num4.join("_");
console.log(joined);

const massege = "This is my first messege.";
const parts = massege.split(" ");
console.log(parts);
const com = parts.join("_");
console.log(com);

//Sorting
const num5 = [5, 3, 7, 1, 2];
num5.sort();
console.log(num5);

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javascript" },
];

courses.sort();
console.log(courses);

courses.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);

//Testing the element of the array
const numbers = [1, 2, -1, 3, 5, 4];
const allPositive = numbers.every(function (value) {
  return value >= 0;
});
console.log(allPositive);
const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});
console.log(atLeastOnePositive);

const arr = [-20, 5, 47, -1, 1, 7, 15, 22, -5, 26];
//filter method
const filtered = arr.filter((n) => n >= 0);
const items = filtered.map((n) => "<li>" + n + "</li>");
const joint = "<ul>" + items.join("") + "</ul>";
console.log(joint);
//map method
//put the object in parenthesis in line -> 11 because its an object
const item = arr
    .filter(n => n >= 0)
    .map(n => ({ value: n*10 }))
    .filter(obj => obj.value > 100)
    .map(koo => koo.value*100)
    .join("---"); 
    
console.log(item);
//filter is like returning array by elemenating some of them
//map is like returning array by modifing each element of array

//reduce method
const nums = [1,-1,2,3];
const sum = nums.reduce(
    (accumulator, currentValue) => accumulator+currentValue, 0 )
    ;
console.log(sum);

//in line 22 in -> ,0 here 0 the intial value of accumulator
//if we dont declear that then the accumulator will be the first element of array
//& current value will be the second element of the array