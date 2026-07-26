// functions
// resuable block of code => {}
// task

// syntax
// function declaration
function function_name() {
    // function body
    // block
}
// function call / invoke
function_name();


function greet() {
    console.log("Hello World!");
}
greet();
greet();

// function with input
// parameter & argument
function greetPerson(name = "Guest") { //parameter
    console.log(`Hello ${name}!`);
}
greetPerson("Krishna"); //arguement
greetPerson("Johnn");
greetPerson(); // default parameter "Guest" is dispalyed

// function with return types
function greetUser(name = "Guest", age) {
   const message = `Hello ${name}! age is ${age}`;
   return message;
   console.log("hiiiii"); //unreachable code
}
const x = greetUser("Krishna", 15);
console.log(x);
console.log(greetUser(15, "Johnn"));

// add() / return summ
function add(num1 = 0 ,num2 = 0){
    sum = num1 + num2;
    return sum;
}
const res = add(5, 5);
console.log("The sum is ", res);

// sub()
function sub(num1 = 0 ,num2 = 0){
    dif = num1 - num2;
    return dif;
}
const result = sub(5, 5);
console.log("The difference is ", result);

// function expression
// let const var
const product = function (num1 = 0 ,num2 = 0){
    let prod = num1 * num2;
    return prod;
}
console.log(product(12, 2));

// write 2-3 functions using both wayss

function average(...nums){
    let sum = 0;
    for (let num of nums){
        sum += num; 
    }
    return sum / nums.length;
}

const output = average(1,2,3,4,5);
console.log("Avrage is: " , output);


function isEven(num) {
    if (num === 0){
        return "zero";
    }
    else if (num % 2 === 0 ) {
        return "even";
    }
    else {
        return "odd";
    }
}
const output1 = isEven(10);
console.log(output1);

const divide = function(num1, num2) {
    return num1 / num2;
}

console.log("the result is: ", divide(20,10));

// arrow funciton
const addition = (a,b) =>  a + b; // if an arrow function's body has only 1 return statement.
console.log(addition(1,9));

const divison = (a,b) => {
    return a / b;
};
console.log(divison(5,1));


// callback function
function parent (callback) {
    console.log("parent");
    const square = callback(5); //pass the arguments and get the returned value where the function is called
    console.log(square);
}
function child(num = 0) {
    console.log("child" , num * num);
    return num * num;
}
parent(child);
// parent(child());

parent(function(num){
    return num * num;
});
parent((num) => num * num );

// higher order function / a function that either take a function as an arguement or returns a function
const outer = () => {
    console.log("outer");
    const inner = () => {
        console.log("inner");
    };
    return inner;
};
const a = outer();
console.log(a);
a();

// todo: IIFE -> immidiately invoked function expression
(function run() {
    console.log("run");
})();
( () => { 
    console.log("run");
})();

// todo: generator function
function* simpleGenerator() {
    console.log("log1");
    yield 1;
    console.log("after 1");
    console.log("log2");
    yield 2;
    console.log("after 2");
    console.log("log3");
    yield 3;
    console.log("after 3");
}
const generatorObj = simpleGenerator();
const generatorObj2 = simpleGenerator();
console.log(generatorObj.next());
console.log(generatorObj2.next());
console.log(generatorObj.next());
console.log(generatorObj.next());

function* generateId() {
    let id = 0;

    while(true){
        id ++;
        yield id;
    }
};

const IDobj = generateId();
console.log("Your Id: ",IDobj.next().value);
console.log("Your Id: ", IDobj.next().value);
console.log("Your Id: ", IDobj.next().value);


// todo: recursive function
let counter = 0;
function printHello() {
    console.log("hello");
    counter++;
    console.log(counter);
    if (counter >=6){
        return;
    }
    printHello();
};
printHello();