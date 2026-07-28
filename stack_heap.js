// Stack (Primitive)
let myAge = 10;
let myNewAge = myAge;
myNewAge = 20;
console.log(myAge);
console.log(myNewAge);

// Heap(Reference non primitive)

let me = {
  name: "rajan",
  age: 20,
};
let nowMe = me;
nowMe.age = 22;
console.log(me);
console.log(nowMe);
