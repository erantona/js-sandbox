//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(5);
circle.draw();

//Constructor Function
//here autometicly 'return' by 'new' will 
//create an empty object that will point to function 'this'.
function Circle(radius) {
    // console.log(this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw2');
    }
}

const circle1 = new Circle(5);
circle1.draw();
//
//
// another way to create function
const Squre1 = new Function('arm', `
this.arm = arm;
this.draw = function(){
    console.log('draw2');
}
`);
const another = new Squre1(1);

function Squre(arm) {
    this.arm = arm;
    this.draw = function () {
        console.log('draw2');
    }
}
const squre = new Squre(1);
//by clll method
const squre2 = Squre.call({}, 1);
//by apply method
const squre3 = Squre.apply({}, [1]);
//
//
//
//Enumaration
function Oval(location, arr) {
    this.location = location;
    this.sketch = function () {
        console.log('sketch');
    }
    this.arr = arr;
}
const oval = new Oval(1, [5, 6, 7]);
// by for loop
for (let key in oval) {
    console.log(key, oval[key]);
}
//by Object.keys
const keys = Object.keys(oval);
console.log(keys);
if ('arr' in oval) {
    console.log('Oval has array');
}
//Abstruction
function Docs(title) {
    let pages = 20;
    let detail = { author: 'subohi jain', topic: 'firebase' };
    let print = function (factor) {
        //.........
    }
    this.title = title;
    this.copy = function () {
        let x = 4;//scope
        print(1);//closer
        this.title;//acessable by this
        console.log('copying!!' + x);
    }
}
const docs = new Docs('Backend dev');
docs.copy();
//
//
//
// Getter & Setter
function Pdfs(title) {
    let pages = 20;
    let detail = { author: 'subohi jain', topic: 'firebase' };
    // //Getter
    // this.getDetail = function(){
    //     return detail;
    // }

    this.title = title;
    this.copy = function () {
        console.log('copying!!');
    }
    Object.defineProperty(this, 'detail', {
        get: function () {
            return detail;
        },
        //Gatter & Setter
        set: function (value) {
            if (!value.author || !value.topic)
                throw new Error('invalid value');
            detail = value;
        }
    });


}
const pdf = new Pdfs('Backend dev');
pdf.copy();


//
//
//Function StopWatch
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('Stopwatch has already running');

        running = true;

        startTime = new Date();
    };

    this.stop = function () {
        if (!running)
            throw new Error('Stopwatch has already stopped');

        running = false;

        endTime = new Date();

        const sec = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += sec;

    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    });
}