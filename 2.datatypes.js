//! datatypes


//primitive



// number
let a = 10;
let b = 12.113;

//string
let c = '';
let d = "hello world 2 + 2";

// `` -> template literal

// let e  = `fjldfglkd
// sfsdf
// dasdaasd`;

let user = "John";
let e =`hello ${2 + 2}`;

console.log("hello user");
console.log(`hello ${user}`);
console.log(d);
console.log(e);
//boolean
let f = true;
let g = false;

//undifined
 //let h = undefined;
 let h;
 console.log(h);

// null
let i = null;
 console.log(i);


// bigint
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
let j = 9007199254740991;

const big = BigInt(12);
console.log(9007199254740991n +2n);
console.log(9007199254740991n +3n);
console.log(9007199254740991n +4n);
//console.log(12n + 1) err cannot mix bigint and normal number


//symbol
let id = Symbol("id");
let id1 = Symbol("id");
console.log(id);
console.log(id1);
console.log(id == id1);

// console.log(e.charAt(1));
// e[1] ="f";
// e = "hhh";
// console.log(e);
console.log(e.toUpperCase());
console.log(e.toLowerCase());
console.log("hello".charCodeAt(0));
console.log("hello".endsWith("o"));
console.log("hello".endsWith("c"));
console.log("hello".padStart(7,"0"));
console.log("hello".toLocaleLowerCase(0));
//undefined & not defined
let k;
console.log(k);
// console.log(l); //! ReferenceError: l is not defined

// todo: type conversion
//explicit
let age = "20";
console.log(typeof age);
age = Number(age);
age +=1;
console.log(age);
console.log(typeof age);

let l = "";
let m = "";
let n = "";

l= Number(l);
m= String(m);
n= Boolean(n);

console.log(l, typeof l);
console.log(m, typeof m);
console.log(n, typeof n);

// todo: type coercing
let o = 1;
let p = "hello";

console.log(o + p);
console.log(o * p);
let q = "1";
console.log(o + q);
console.log(o * q);

// impicit explicit

// todo: operators

//non-primitive

//object
//array
//function