//Prototypical Attribute
let person = { name: 'Jhon' };
console.log(person);
console.log(Object.keys(person));
Object.defineProperty(person, 'name', {
    writable: false,//help not to change the property
    enumerable: false,//Object.keys will return empty array instade of keys
    configurable: false//help not to delete propperty
});

person.name = 'mosh';
console.log(person);
console.log(Object.keys(person));
delete person.name;
console.log(person);


//Constructor Protypes
 
