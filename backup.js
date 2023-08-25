// This is the parent class.
// All child classes will inherit its properties and methods
class Animal {

    constructor(name) {
        // `alive` is a "property". Here we make it true by default
    		this.alive = true;
        
        // Name has no default value, and we set it in the constructor
        this.name = name;
    }

    // `sayName` is a "method". It is different from a function
    // in that it is "attached" to a class
    sayName() {
        // `this` refers to the specific instance of the class.
        console.log('my name is ' + this.name);
    }
}

// The Cat class extends the Animal class, and so it inherits all the
// properties and methods of the Animal class
class Cat extends Animal {
    constructor(name) {
        // We must call `super` when we extend a class
        // We call `super` with the arguments that are required in its constructor
        super(name);
    }

    // Only cats meow, that's why we've created a Cat class
    meow() {
        console.log('meow');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    // Only dogs bark, that's why we've created a Dog class
    bark() {
        console.log('bark!');
    }
}


// Here we "instantiate" spot. spot is an "Instance" of a Dog
const spot = new Dog('Spot');
// Here we "instantiate" fido. spot is an "Instance" of a Dog
const fido = new Dog('Fido');


// The `sayName` method uses `this`, so `this.name` is different
// for spot and fido
spot.sayName();
fido.sayName();

// Here we "instantiate" fluffy. fluffy is an "Instance" of a Cat
const fluffy = new Cat('Fluffy');

// fluffy can meow:
fluffy.meow();

// And can say her name:
fluffy.sayName();

// But she cannot bark, she only inherits methods from Animal.
// If we uncommented this code and tried to run it, we would get an error:
// fluffy.bark();


// We can also use the parent class directly if we want:

const teddy = new Animal('Teddy');

// We can change whether an animal is dead or alive

teddy.alive = false;


// There are ways that we can prevent "killing" an animal
// by making `alive` a "private" property.
// We can go through that in the next session.


