//Function Declearation
//We can call before it defined
//It's called Hoisting because it automaticlly go up in back by javaScript engine.
function Walk() {
    console.log('Walk');
}
//Named Function Expression
//We can call before it defined

let run2 = function Run() {
    console.log('Run');
};
//Anonymous Function Expression
let run = function () {
    console.log('Runing fast');
};
let move = run;
run();
move();
//
//
//Agruments

function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));//3
console.log(sum(1));//NaN
console.log(sum(1, 2, 3, 4));//3


function sum1(a, b) {
    console.log(arguments);
    return a + b;
}
console.log(sum1(1, 2, 3, 4));


function sum3() {
    let total = 0;
    for (let val of arguments)
        total += val;
    return total;
}
console.log(sum3(1, 2, 3, 4));
//
//
//
//Default Parametar

function interest(principal, rate = 3.5, year = 1) {
    // rate = rate || 3.5;
    // year = year ||1;

    return principal * rate / 100 * year;
}

console.log(interest(10000));
console.log(interest(10000), undefined, 5);
//
//
//
//getter setter & try catch****read carefully ull get it ;-)
const person = {
    firstname: 'jhon',
    lastName: 'kapoor',
    get fullname() {
        return `${person.firstname} ${person.lastName}`;
    },
    set fullname(values) {
        if (typeof values !== 'string')
            throw new Error("It's not a string..!! ");
        const parts = values.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter first name and last name.');
        this.firstname = parts[0];
        this.lastName = parts[1];
    }
}
try {
    person.fullname = 'mery com';
}
catch (e) {
    //console.log(e);
    alert(e);
}
console.log(person);
console.log(person.firstname);

//
//
//
//Local vs Global Scope
const color = 'red';//It's global variable we can use it
// any where and modify value of the variable
function start() {
    const message = 'starting';
    //It's local acessable inside the curly braces 
    // console.log(color);//red--but before declearing or modifing you cannot call it 
    //so commented*****
    const color = 'red';
    console.log(color);
}
function stop() {
    const message = 'stopping';
}
start();
//
//
//Let vs. Var
//ES6 -> let/const => block scope
// ver => function-scope
function start() {
    for (let i = 0; i < 10; i++) {
        if (true) {
            var color = 'red';
        }
    }
    console.log(color);//so var is acessable inside the function anywhere if decleared once.
}
start();

var color = 'red';//var keyword attached color to the window object
let age = 20;
function sayHi() {
    console.log('hi');
}
//
//
//
//'this' keyword
//rule 1: If the function method of an object 'this' references that object.
const video = {
    title: 'happy jhin',
    play() {
        console.log(this);//from inside
    }
};
video.stop = function () {
    console.log(this);//from outside
};
video.play();
video.stop();

//rule 2: if the function is a ragular function(not part of an obj)
//'this' reference to global obj which is window obj in browsers
//& global in Node

function playVideo() {
    console.log(this);
}
playVideo();//Window in browser

function Video(title) {
    this.title = title;
    console.log(this);
}
const v = new Video('abc');
//
//
//Changing value of this
////by sending this along forEach
const video1 = {
    title: 'hojo jhin',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag); //direct this.title won't work 
        }, this);
    }
};
video1.showTags();

//by creating a this instance
const video2 = {
    title: 'jhin',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag); //direct this.title won't work 
        });
    }
};
video2.showTags();

//by bind method
const video3 = {
    title: 'happy jhin',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag); //direct this.title won't work 
        }.bind(this));
    }
};
video3.showTags();

//Arrow function**best method
const video4 = {
    title: 'hoin',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag =>
            console.log(this.title, tag)
        );
    }
};
video4.showTags();
