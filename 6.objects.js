//objects

//user -> name, email, password

// let user = [1, "John", "john@gmail.com", "john23"];
// let user2 = [2, "Jhoana", "jhoana@gmail.com", "jhoana23"];

// let users = [[1, "John", "john@gmail.com", "john23"],[2, "Jhoana", "jhoana@gmail.com", "jhoana23"]]

// object literal
let user = {};
//new keyword / object constructor
const obj = new Object();

console.log(user, obj);

let user1 = {
    _id: 1,
    name: "John",
    email: "john@gmail.com",
    password: "john12233",
    "full name": "John Doe"
}
console.log(user1);

// reading properties
// dot notation
const emaill = user1.email;
console.log(emaill);
console.log(user1.name);
// bracket notation
const passwordd = user1["password"]; // -> user.password
console.log(passwordd);

// adding new properties
// dot notation
user1.address = "bhaktapur";
console.log(user1);
// bracket_ notation
user1["is_student"] = false;
console.log(user1);

// modify properties
user1.name = "John Doe";
user1["email"] = "johndoe@gmail.com";
console.log(user1);
console.log(user1["full name"]); //  have to user bracket notation if the key of an object's property has a space

let read_val = "password";
console.log(user1[read_val]); // user["password"]

let add_vall = "role";
user1[add_vall] = "admin"; //user["role"]
console.log(user1);

// es6 

// spread operator => ...
// arr/object

let u1={
    a: "a",
    b: "b"
}
// let u2 = u1; // non-premitive data types work on reference
// u2.a = "ab";
// console .log(u1); // {a: 'ab', b: 'b'}
let u2 = {...u1, c: "c"};
u2.a = "ab";
console.log(u1);
console.log(u2);


// destructuring
// let name = user1.name;
// let email = user1.email;
// let password = user1.password;
let {name, email, pass } = user1; //keynames must match exactly
console.log(name, email, pass );
let {name: userName, email: userEmail, password: userPassword } = user1;
console.log(userName, userEmail, userPassword);


// todo: rest operator -> ...
let person = {
    personName:"Alice",
    age: 20,
    city: "ktm"
};

const {personName, ...details} = person;
console.log(personName);
console.log(details);