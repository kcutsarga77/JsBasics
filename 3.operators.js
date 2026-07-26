//operators

// arithmetic operators
// + , - , * , / , % , **

// console.log(10 + 2);
 let a = 10;
let b = 2;
// console.log(a + b);
// console.log(a - b);
let sum = a + b;
// console.log(sum);
// console.log(a * b);
// console.log(a / b); //5
// console.log(a % b); //0
// console.log(a ** b);

// console.log( "hello" + " " +"world"); // hello world


//assignment operators
// =, +=, -=, *=, /=, %=, **=
let c = 10;
c += 20; // c = c + 20
let d =23;
c += d; // c = c + d

// comparison operators
// ==, ===, !=, !==, <, >, <=, >=

let e = 10;
let f = "10";

// console.log(e < f); // false
// console.log(e <= f); // true
// console.log(e > f); // false
// console.log(e >= f); // true
// console.log(e == f); // true
// console.log(e === f); // false
// console.log(e != f); // false
// console.log(e !== f); // true


// logical operators
// AND &&, OR ||, NOT !
// returns boolean value

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); //false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); //true


//unary operators
// increment -> ++ & decrement -> --
// pre & post 

let count = 1;

console.log(count);
console.log(count++); // post
console.log(count);
console.log(++count); // pre


//ternary operator
// condition ? expression1 : expression2
let age = 18;
// age >= 18 ? console.log("can vote") : console.log("cannot vote");
const res = age >= 18 ? "can vote" : "cannot vote";
console.log(res);


// typeof operator
console.log(typeof res);
console.log(typeof "");
console.log(typeof 10);
console.log(typeof count);
console.log(typeof count === "number");


// null coalescing //null safety -> ??
let user ="John";
console.log(user ?? "Guest");


//type conversion
//explicit
console.log(Boolean(12));
console.log(String(12));
console.log(Number("12"));
console.log(Number("abc")); // NaN

// type coercion
//Implicit
console.log(10 + "2"); // 102
console.log(10 - "2"); // 8
console.log(10 - "a"); //NaN


// == vs === (coercion)

//todo: truthy & falsy values
// All falsy values are false when converted to boolean context, but not all false values are falsy.
// falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN]

let x = 0;

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(" "));

if (!x) {
    console.log("run");
}