// array methods
// arr.push(), pop(), shift(), unshift(), splice(), slice(), includes(), indexOf()


// higher order methods
// loop, transform, filter

// for each -> loop
// arr_name.forEach(callback)
let numbres = [23, 45, 6, 7, 8];
let doubled = [];
// value, index, array
 numbres.forEach((value, index, arr) => {
    console.log(value, index, arr);
    doubled[index] = value * 2;
});

console.log(doubled);

// map -> transformation
// returns new array
const doubledArr = numbres.map((v,i,a) => {
    // return v *2;
    return "*";
});
console.log(doubledArr);

// user = ['johnn@gmail.com', 'sam@gmail.com', 'dev@gmail.com']
let users = [
    {
        name: 'johnn',
        email: 'johnn@gmail.com'
    },
    {
        name: 'sam',
        email: 'sam@gmail.com'
    },
    {
        name: 'dev',
        email: 'dev@gmail.com'
    },
];
const emails = users.map((val , ind , arrayy) => {
    return val.email;
});
console.log(emails);

const names = ["johnn", "sam", "dev"]; // =>  ["JOHNN", "SAM", "DEV"]
const CapNames = names.map((name) => {
    return name.toUpperCase();
});
console.log(CapNames);

// filter, reduce
// filter 
let numArrray = [1, 2, 3, 4, 5];
let evenNums = numArrray.filter(isEven);
console.log(evenNums); 
let oddNums = numArrray.filter(isOdd);
console.log(oddNums); 

function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}

const even_numbers = numbres.filter((num,i) => { // filter always returns the current element if the boolean conversion of the current return is 'true'.
    if (num % 2 === 0){
        return num;
    }
});

// const even_numbers = numbres.filter((num) => num % 2 === 0);
const odd_numbers = numbres.filter((num) => num % 2 !== 0);
console.log(even_numbers);
console.log(odd_numbers);



// filter to find adult users of age 18 and above
let userArr = [
    {
        name: 'johnn',
        age:18,
        email: 'johnn@gmail.com',
        subscribed: false
    },
    {
        name: 'sam',
        age:14,
        email: 'sam@gmail.com',
        subscribed: true
    },
    {
        name: 'dev',
        age:30,
        email: 'dev@gmail.com',
        subscribed: true
    },
];

const adult_users = userArr.filter((user) => user.age >=18 && user.subscribed);
console.log(adult_users);

// reduce
// arr_name.reduce((prev_value, current_value, curr_index, curr_array)) => {}, initial_val)

const prices = [5, 10, 20, 15, 30, 36];
const total = prices.reduce(sumPrices,10);
const maxPrice = prices.reduce(getMaxPrice);
console.log(total);
console.log(maxPrice)

function sumPrices (previous, next){
    return previous + next;
}

function getMaxPrice (accumulator, next){
    return Math.max(accumulator, next);
}

const total_sum = numbres.reduce((acc,num) => {
    return(acc = acc + num);
},0);
console.log(total_sum);

let cart = {
  userId: 1,
  items: [
    {
      product: {
        id: 1,
        name: "product 1",
        price: 1000,
      },
      quantity: 5,
    },
    {
      product: {
        id: 3,
        name: "product 3",
        price: 1200,
      },
      quantity: 3,
    },
    {
      product: {
        id: 10,
        name: "product 10",
        price: 900,
      },
      quantity: 8,
    },
  ],
};

sum=0;
const total_amount = cart.items.reduce((acc,curr) => {
    return  acc + curr.product.price * curr.quantity;
},0);
console.log(total_amount);

const students = [
    {
        name: "John",
        marks: [24, 56, 76, 78, 68]
    },
    {
        name: "Alice",
        marks: [52, 56, 30, 24, 68]
    },
    {
        name: "Bob",
        marks: [52, 56, 67, 78, 45]
    }
];

// avg_marks >=50 -> passed
// => ['john','alice']

// const passedStudents = students.map((student) => {
//     const avgMrks = student.marks.reduce((accum,nextVal) => accum + nextVal,0) / student.marks.length;
//     console.log(avgMrks);
//     if (avgMrks >=50){
//         return student.name;
//     }
// });
// console.log(passedStudents);
// const passedStuds = passedStudents.filter((student) => student !== undefined);
// console.log(passedStuds);

const passedStudents = students.map((student) => {
    const avgMrks = student.marks.reduce((accum,nextVal) => accum + nextVal,0) / student.marks.length;
    console.log(avgMrks);
    if (avgMrks >=50){
        return student.name;
    }
}).filter((student) => student !== undefined);
console.log(passedStudents);

let products = [
    {
        _id: 1,
        name: "product 1",
        category: "electronics"
    },
    {
        _id: 2,
        name: "product 2",
        category: "furniture"
    },
    {
        _id: 3,
        name: "product 3",
        category: "furniture"
    },
    {
        _id: 4,
        name: "product 4",
        category: "electronics"
    },
    {
        _id: 5,
        name: "product 5",
        category: "clothing"
    },
];
// => {electronics:[{},{}], furniture:[{},{}], clothing:[{}]}
const categoryArr = products.reduce((acc, product) => {
    if (!acc[product.category]){
        acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
},{});
console.log(categoryArr);


const electronics = products.filter((product) => {
    return product.category === "electronics"
});
const furniture = products.filter((product) => {
    return product.category === "furniture"
});
const clothing = products.filter((product) => {
    return product.category === "clothing"
});

// find -> value

// findIndex -> index, -1


// every

// some
