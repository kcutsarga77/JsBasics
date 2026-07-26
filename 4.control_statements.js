// control flow

// control statements
// control statements are used to control the flow of execution in a program. They allow you to make decisions, repeat actions, and handle different scenarios based on conditions.

// conditional statements
// if 

// if (expression) {
//   // logic
// }

let age = 18;

if (age) {
    console.log("You are", age, "years old");
}

// if else
if (age ) {
    console.log("You are", age, "years old");
}
else{
    console.log("Age not found");
}


if (age >= 18) {
    console.log("You can vote");
}
else{
    console.log("you cannot vote");
}


// else if ladder
//age >=60
// age>=18
//else minor

if (age >= 60) {
    console.log("major");
}
else if (age >= 18) {
    console.log("adult");
}
else{
    console.log("minor");
}

// switch case
 let day = 1;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuseday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Enter day between 1-7");
}



//loops

// do while

let i = 1;
do{
    console.log(i);
    i++;
}while(i <= 10);

// while

console.log("while loop");
let j = 1;
while( j<= 10){
    console.log(j);
    j++;
}

// for

// for(intialization; condition; increment/decrement){
//     block
// }
console.log("for loop");
for (let k =1; k <= 10; k++){
    console.log(k);
}

// for in -> non iterables -> objects
let user = {
    name: "Johnn",
    email: "johnn@email.com",
    password: "12johnn"
};
for (let key in user){
    console.log(key, user[key]);
}

// for of -> iterables -> arrays, strings
let arr = [1,3,5,7,9];
for (let i=0; i<=arr.length;i++){
    console.log(arr[i]);
}
for (let x of arr){
    console.log(x);
}
for (let x of "hello"){
    console.log(x);
}



// jump / branching keywords
// break, continue, return

for (let l =1; l <= 10; l++){
    if (l === 6) {
        break;
    }
    console.log(l);
}

for (let l =1; l <= 10; l++){
    if (l === 6) {
        continue;
    }
    console.log(l);
}

// obecjts array
