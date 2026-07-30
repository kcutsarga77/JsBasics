// class
// let johnn = {
//     name: "",
//     email: "",
//     password: "",
//     getName() {},
//     getPass() {},
// }
// let stann = {
//     name: "",
//     email: "",
//     password: "",
//     getName() {},
//     getPass() {},
// }
// let stud1 = {
//     name: "",
//     email: "",
//     password: "",
//     year: "",
//     faculty: "",
//     getName() {},
//     getPass() {},
// }

class User {
    name;
    email;
    #password;

    constructor (name, email, password) {
        this.email = email;
        this.name = name;
        this.#password = password;
    }
    // methods
    getPassword() {
        return this.#password;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
}
// creating user object
const johnn = new User("Johnn","john@gmail.com","johnnpass123");
const stann = new User("Stann","stan@gmail.com","stannpass123");
console.log(johnn);
console.log(johnn.name);
//console.log(johnn.#password);
console.log(johnn.getPassword());
console.log(stann.getEmail());

// Student (name, email, password, year, faculty, roll)
class Student extends User {
    // year;
    // faculty;
    // roll;      // no need for public properties

    // super()
    constructor (name, email, year, faculty, roll, password) {
        super(name, email, password);
        this.year = year;
        this.faculty = faculty;
        this.roll = roll;
    }
}
const Kyle  = new Student("Kyle", "kyle@gmail.com", 5,"BSC",15, "kylee123");
console.log(Kyle);
console.log(Kyle.getPassword());