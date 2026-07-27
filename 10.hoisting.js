// hoisting
// js behavior where declarations are processed before execution
// js behavior where declarations are moved top of to their scope.
// var x;
console.log(x); // undefined
var x = 12;
console.log(x); // 12
greet(); // hello
function greet() {
    console.log("hello");
}
greet(); // hello

// console.log(z); // ReferenceError: Cannot access 'z' before initialization
let z = 10;
// TDZ -> Temporal Dead Zone
// period between declaration entering in scope and execution for declation of let or const

// function expression
// a();
// var a = function () {
//     console.log("a");
// }                         // Cannot call before declaration
