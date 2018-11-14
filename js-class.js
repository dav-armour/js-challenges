// let object1 = {}
// object1.name = "David";
// console.log(object1.name);
// object1["age"] = 69;

// let student = {
//   name: "Bob",
//   age: 22,
//   address: {
//     street: "123 Siandra Drive",
//     state: "NSW",
//     city: "Sydney"
//   }
// };

// console.log(student.address["street"]);
// let object2 = new Object();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.awesome = true;
// }

// let student2 = new Person("Sarah", 24);
// console.log(student2);
// let student3 = new Person("Bobby", 90);
// console.log(student3);

// // Doesn't work
// Person.country = "Australia";
// let student4 = new Person("Sam", 28);
// console.log(student4); // Doesn't include country

// student4.country = "Australia"; // Still works
// console.log(student4);

// Person.prototype.country = "Australia";

// function Person(name, age) {
//   this.__proto__.name = name;
//   this.__proto__.age = age;
//   this.__proto__.awesome = true;
// }

// let student5 = new Person("Sarah", 24);
// console.log(student5);

// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
//   this.shout = function () {
//     return `My name is ${this.name}`;
//   }
// }

// let conan = new Hero("Conan", 100);
// let batman = new Hero("Batman", 60);

// function Villain(name,level) {
//   this.name = name;
//   this.level = level;
// }
// Villain.prototype.shout = function() {
//   return `I am the evil ${this.name}`;
// }
// let joker = new Villain('Joker', 60);
// let iceman = new Villain('Iceman', 20);


// console.log(student2); // Doesn't show country but it is there just not a direct property.
// console.log(student2.country) // Property inherited from prototype.
// student2.country = "USA"; // Direct properties overide inherited ones.
// console.log(student2); // Now shows country because it is a direct property.

// let now = new Date();
// console.log(now);
// console.log(now.__proto__); // Works in chrome dev console
// console.log(now.seconds);


// // Inheritance
// function Human() {
//   this.legs = 2;
//   this.arms = 2;
//   this.head = 1;
// }

// Human.prototype.walk = function() {
//   return `Take a stroll with my ${this.legs} legs`;
// }

// function Man(name) {
//   Human.call(this); // Copies the properties directly onto Man, doesn't give access to walk
//   this.name = name;
// }

// let garret = new Man("Garret");
// garret.walk(); // Gives error function doesn't exist

// // How to inherit
// Man.prototype = Object.create(Human.prototype);

// function Child(name) {
//   Human.call(this); // Copies the properties directly onto Man, doesn't give access to walk
//   this.name = name;
// }
// Child.prototype = new Human;

// let ivan = new Man("Ivan");
// let bob = new Man("Bob");
// bob.walk(); // Works

// class Triangle {

// }
// let triangle = new Triangle();

// const p = myFunction(); // Goes and finds the function

// console.log(p);

// function myFunction() {
//   return "I'm a hoisted function";
// }

// const c = new Circle(); // Doesn't work - no hoisting

// class Circle {

// }

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

let r = new Rectangle(20,10);

class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}

let s = new Shape(10, 50);

Shape.prototype.colour = "red";

Shape.measurement = "cm";
let sh = new Shape(1,5);
sh.measurement; // Undefined

Shape.talk = function() { console.log("here"); } // Static class method


// Inheritance
class Square extends Shape {
  constructor(height, width) {
    super(height, width); // Calls parent method
  }
  isSquare() {
    return this.height === this.width;
  }
}

let sq = new Square(10,10);

Shape.prototype.talk = function(input) {
  console.log(`I am a talking ${input}`);
}

class Octagon extends Shape{
  constructor(h,w) {
    super(h,w);
  }
  speak() {
    super.talk("octagon");
  }
}

// class House {
//   static unlock(secretPassphrase) {
//     if (secretPassphrase === "please") {
//       return "ok";
//     } else {
//       return "wrong";
//     }
//   }
// }

// let myHouse = new House();
// myHouse.unlock(); // Undefined - Only available to class not the instance

// class House2 {
//   static unlock(secretPassphrase) {
//     if (secretPassphrase === "please") {
//       return "ok";
//     } else {
//       return "wrong";
//     }
//   }
//   key() {
//     return House2.unlock('please');
//   }
// }

// let myHouse2 = new House2();
// myHouse2.key();