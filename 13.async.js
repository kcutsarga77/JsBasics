// async

// set timeout ->
// setTimeout(callback, timeout, arg1,arg2,....argN)
// console.log("start");
// const timer_id = setTimeout((name) => {
//     console.log("processing", name);
// },2000,"john");
// // clearTimeout(timer_id);
// console.log(timer_id);
// console.log("end");

// setInterval()
// let i= 1;
// const id = setInterval((name) => {
//     console.log(i, name);
//     if (i===10) {
//         clearInterval(id);
//     }
//     i++;
// }, 10,"panduu");
// console.log(id);
// console.log("end");

// countDown(seconds) => hh:mm:ss ->
// 00:00:10
// 00:00:09
// 00:00:08

// function countDown(totalSeconds) {
//     let hours = (totalSeconds - (totalSeconds % 3600)) / 3600;

//     let remainingSeconds = totalSeconds % 3600;

//     let minutes = (remainingSeconds - (remainingSeconds % 60)) / 60;

//     let seconds = remainingSeconds % 60;
//     const Id = setInterval(() => {
//         console.log(`${hours}: ${minutes}: ${seconds}`);
//         if (seconds === 0){
//             clearInterval(Id);
//         }
//         seconds--;
//     },100);
    
// }
// countDown(10);


// todo: revise callback


// login
const login = (callback) => {
    console.log("login start");
    setTimeout( () => {
        console.log("login success");
        let user = {_id:1,email:"johnn@gmail.com",role:"user"};
        // callback(error, data) -> callback(null, data) -> callback(error)
        callback(null,user);
        // callback({message: "login failed"});
    },3000)
}

const getPosts = (userId,callback) => {
    console.log("posting start");
    setTimeout( () => {
        console.log("post fetched");
        const posts = [{
            _id: 1,
            userId: userId,
            title: "post1"
        },
        {
            _id: 2,
            userId: userId,
            title: "post2"},];
        callback(null,posts);
    },2000)
}

const getComments = (postId,callback) => {
    console.log("getting comments");
    setTimeout( () => {
        console.log("comments fetched");
        const comments = [{
            _id: 1,
            postId: postId,
            title: "comment1"
        },
        {
            _id: 2,
            postId: postId,
            title: "comment2"},];
        callback(null,comments);
    },2000)
}

console.log("start");
login((error,user) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("navigate to dashboard");
    console.log(user);

    getPosts(user._id,(error,posts) =>{
    if (error) {
        console.log(error);
        return; 
    }
    console.log("view posts.");
    console.log(posts);
    const post = posts.map((val) => {
        getComments(val._id,(error,comments) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log("view comments");
        console.log(comments);
        });
    });
});
});
// callback hell (pyramid of doom) -> promise
console.log("end");