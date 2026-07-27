// closure 

// function add (a,b) {
//     console.log(a+b);
// }

// add (12, 5);
// add (12, 5);

function parent () {
    let x = "parent";
    function inner () {
        console.log(x);
    }
    return inner;
}
const a = parent();
a();
// child function can access the scope of the parent even aftert the execution of the parent funciton

const Counter = () => {
    let count = 1;
    const increment = () => {
        count++;
        console.log(count);
    }
    const dec = () => {
        count--;
        console.log(count);
    }
    return {
        increment, // if name of key and value is same
        decrement: dec,
    };
}
const counter1 = Counter();
const counter2 = Counter();
counter1.increment();
counter1.decrement();
counter1.decrement();
counter1.increment();
counter1.increment();
counter2.decrement();

// Account(name initial amount)
// withdraw(amount) 
// deposit(amount)
// blanceInquiry() => clg/return 
const Account = (name, initial_amount) => {
    let Accname = name;
    let balance = initial_amount;
    const withdraw = (amt) => {
        if (amt <= 0) {
            console.log("Please enter a valid amount greater than zero.");
            return;
        }
        balance -= amt;
        console.log(`Rs.${amt} was withdrawn. Now balance is Rs.${balance}.`);
    }
    const deposit = (amt) => {
        if (amt <= 0) {
            console.log("Please enter a valid amount greater than zero.");
            return;
        }
        balance += amt;
        console.log(`Rs.${amt} was deposited in your account. Now your balance is Rs.${balance}`);
    }
    const balance_inquiry = () => {
        console.log(`${Accname}, your total balance is Rs.${balance}`);
    }
    return {
        withdraw,
        balance_inquiry,
        deposit,
    };
}
const Johnn = Account("Johnn", 5055);
Johnn.deposit(0);
Johnn.balance_inquiry();
Johnn.withdraw(800);

// todo: function factory
// todo: caching