// this -> object

// this -> module.exports => {}
module.exports.name = "john";
module.exports.age = 19;
module.exports = {
    age: 17,
}
module.exports.email = "john@gmail.com";
console.log(this);

function a() {
    console.log(this);
}
// a();

let user = {
    name: 'Johnn Doe',
    email: 'Johnn@gmail.com',
    getName: () => {
        console.log(this.name);
    }
}
user.getName();

// arrow function
// let user = {
//     name: 'Johnn Doe',
//     email: 'Johnn@gmail.com',
//     getName: () => {
//         console.log(this.name);
//     }
// }
// user.getName(); // "john" from module exports // arrow function doesn't have it's own this.

let user1 = {
    name: 'Johnn Doe',
    email: 'Johnn@gmail.com',
    getName() {
        const a = () => {
            console.log(this.name);
    };
    a();
}
}
user1.getName();

// loosing context
let user2 = {
    name: 'Johnn Doe',
    email: 'Johnn@gmail.com',
    getName () {
        console.log(this.name);
    }
}
const fn = user.getName;
fn();

// class
class User {
    name;
    email;
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }
    getEmail() {
        console.log(this.email);
    }
}
const u = new User("Stann", "stan@gmail.com");
const u1 = new User("Johnn", "john@gmail.com");
// new => {} <-- this
// this.name => {name}
// this.email => {name, email}
// return this => u
console.log(u);
u.getEmail();
u1.getEmail();

// function object
function add(a, b) {
    console.log(a + b);
}
 add.age = 24;
console.log(add.name);
console.log(add.age);
add(12,3);

function introduce (age, address) {
    console.log(this);
    console.log("i am ", this.name);
}

// call, apply, bind
introduce.call(u, 12,"dang");
introduce.apply(u1, [34, "dang"]);
const f = introduce.bind(u1, 34, "dang");
f();