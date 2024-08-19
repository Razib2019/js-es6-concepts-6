// Primitive Data Type
const x = 5;
const y = true;
const a = "hello";

let z = x;
z = 10;

// console.log("x=", x);
// console.log("z=", z);

// Non Primitive Data Type
const b = { name: "Razib" };
const nums = [1, 2, 3];

let num1 = nums;
num1.push(4);

// console.log("num1:", num1);
// console.log("nums:", nums);

const c = b;
c.age = 25;
// console.log("b:", b);
// console.log("c:", c);

// Truthy and Falsy Value
// Truthy Value:true, "Razib", 125, " ", [], {},1

// Falsy Value: false, 0, "", null, undefined, NaN

const value = " ";
console.log(!!value);
