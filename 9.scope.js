// scope
// accessibility or visibility of a veriable or funciton
// var is function scope if defined within a function
// let and cnost are block scope

// global scope
var global_var = "global_var";
let global_let = "global_let";
const global_const = "global_const";
console.log(global_var);
console.log(global_let);
console.log(global_const);

// block scope
// {}
if (true){
    var block_var = "block_var"; // var is global if declared in a block
    let block_let = "block_let"; // let is not global
    const block_const = "block_const"; // const is not global
    console.log("------block------")
    console.log(global_var);
    console.log(global_let);
    console.log(global_const);
    console.log(block_var);
    console.log(block_let);
}

// function scope
function scope() {
    var function_var = "function_var"; // var is not global of declared in a function
    let function_let = "function_let"; // let is not global
    const function_const = "function_const"; // const is not global
    console.log("------function---------")
    console.log(global_var);
    console.log(global_let);
    console.log(global_const);
    console.log(block_var);
    console.log(function_var);
}
scope();
console.log("------global---------")
console.log(block_var);


// lexical scope
// child can access variables from parent scope
function outer() {
    let a = "outer";
    function inner() {
        let b = 'inner';
        console.log(a);
    }
    inner();
}
outer();

// scope chain 

let x = 12;
function scopee() {
    let x = 45;
    console.log(x);
}
scopee();
function outr() {
    // let x = "outr";
    console.log(x);
    function innr() {
        let y = 'innr';
        console.log(x);
    }
    innr();
}
outr();
// declare variables at the nrearest scope to which the veriable is required to be shared

// module scope 

// todo: callstack, execution context -> [memory creation phase , execution phase]
// memory creation phase
// memory allocation
// { t:undefined, s:undefined, a:(){}}

// execution pahse
// code execution
// variable initialization

var t = 40;
console.log(t);
var s = 56;
function a() {
    console.log("a");
    function b() {
        console.log("b");
        function c() {
            console.log("c");
        }
        c();
    }
    b();
    console.log("d");
}
a();

// c();
// b();
// a();
// GEC
// callstack / last in first out

