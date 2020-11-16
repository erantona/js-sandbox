//Basic Object
const circle = {
  radius: 5,
  location: {
    x: 2,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw!!");
  },
};
circle.draw();
//
//
//
//Factory function(Camel Notation)

function createCircle(radius) {
  return {
    radius, // eqv to  radius: radius,
    draw() {
      console.log("Draw!!");
    },
  };
}

const circle1 = createCircle(5);
console.log(circle1);
const circle2 = createCircle(10);
console.log(circle2);
//
//
//
//Constructor function(Pascal Notation)

function Circle9(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw!!");
  };
}
const circle9 = new Circle9(5);
console.log(circle);
//
//
//
//Dynamic behaviour of Objects
const circles = {
  radius: 1, // eqv to  radius: radius,
};
circles.color = "blue";
circles.draw = function () {
  console.log("Draw");
};
console.log(circles);

delete circles.radius; // you can easily add or delete properties
console.log(circles);
circles.draw();
//
//
//
//functions are objects
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw!!");
  };
}
const Circle1 = new Function(
  "radius",
  `this.radius = radius;
  this.draw = function () {
    console.log("Draw!!");
  }`
);
const circlee = new Circle1(1); //same as Circle.call({}, 1);
Circle.call({}, 1, 2, 3);
Circle.apply({}, [1, 2, 3]);
//
//
//
//value type
let number = 10;

function increase(num) {
  return num++;
}

increase(number);
console.log(number); //10
//
//
//
//reference type
let obj = { value: 10 };
function increase1(obj) {
  return obj.value++;
}
increase1(obj);
console.log(obj.value); //11
//
//
//
//Enumuration of Object
const Circle0 = {
  radius: 1,
  draw() {
    console.log("Deaw!!");
  },
};

for (let key in Circle0) console.log(key, Circle0[key]);

for (let key of Object.keys(Circle0)) console.log(key);

for (let entry of Object.entries(Circle0)) console.log(entry); //return array

if ("color" in Circle0) console.log("yes"); //check Wheather the property is in the object
//
//
//
//Clone of a Object
const Circle4 = {
  radius: 1,
  draw() {
    console.log("Deaw!!");
  },
};

const anotherCircle1 = {};
for (let key in Circle4) anotherCircle1[key] = Circle4[key];
console.log(anotherCircle1);

const anotherCircle2 = Object.assign({}, Circle4);
const anotherCircle4 = Object.assign(
  {
    color: "yellow", //we can initiate property like this
  },
  Circle4
);
console.log(anotherCircle2);
console.log(anotherCircle4);

const anotherCircle3 = { ...Circle4 };
console.log(anotherCircle3);
