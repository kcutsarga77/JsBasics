// array
let num1 = 1;
let num2 = 2;

// new keyword / array constructor
const arr = new Array(12); //array of 12 empty items
const arr1 = new Array(0, 1, 2, 3, 4, 5);

// array literal
const numbers = [12, 3, 5, 6, 8];
// elements
// number indexed -> starts from 0 => 0th index
// length -> total number of elements in the array

console.log(arr, arr1, numbers);

//reading elements
//index, using bracketed notation
const first = numbers [0];
console.log(first);
console.log(numbers[1]);

// length property
// array.length
console.log(numbers.length);
console.log("last", numbers[numbers.length - 1]);

// adding new elements
// push() -> numbers.push(.....items) /end index
console.log(numbers);
numbers.push(15, 34, 57);
console.log(numbers);
// unshift () -> /start index
numbers.unshift(34, 45, 6);
console.log(numbers);

// removing elements
// end index
// pop() => numbers.pop()
const ele = numbers.pop();
console.log(ele);
console.log(numbers);
// start index
// shift() -> numbers.shift()
const ele1 = numbers.shift();
console.log(ele1);
console.log(numbers);

// colors = []
const colors = new  Array("red", "yellow", "blue", "green", "white");
// read
console.log(colors);
console.log(colors[0]);
// last element
console.log(colors[colors.length - 1]);
// add
// start / end
colors.push("black", "violet");
console.log(colors);
colors.unshift("fushia");
console.log(colors);
// remove
// start / end
const color= colors.pop();
console.log(color);
console.log(colors);
const color2= colors.shift();
console.log(color2);
console.log(colors);

// splice()
// numbers.splice(start_index, delete_count, ele1, ele2, ....eleN)
console.log(numbers);
const a= numbers.splice(1, 2, 34,5,6,7,8);
console.log(a);
console.log(numbers);

// searching
// includes /returns boolean
console.log(numbers.includes(34));
console.log(numbers.includes(340));
//indexOf() /returns index
console.log(numbers.indexOf(34));
console.log(numbers.indexOf(340));

// todo: slice
let fullName = "Leo Messi";
let firstName = fullName.slice(0,fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);
// array slicing
const contestants = ["Brown", "Bavhuma", "Woltemarde", "Ingrid", "Sanchez"];
const top3 = contestants.slice(0, 3);
console.log(contestants);
console.log(top3);
const btm3 = contestants.slice(-3);
console.log(btm3);


// objects