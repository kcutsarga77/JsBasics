// promise
// object that represents the eventual completion or faliure of a async task

// new Promise() -> Promise constructor
// states
// pending
// fulfilled
// rejected

// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (error) {
//             reject({message: "failed"});
//         }else {
//             resolve({message:"success"});
//         }
//     },2000);
// });
// console.log(promise);

// handeling promise
// console.log("start");
// promise
//     .then((data) => {
//         console.log("fulfilled");
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("rejected");
//         console.log(error);
//     })
//     .finally(() => {           // runs in any case
//         console.log("finally");
//     });
// console.log("end");

// user login
const userLogin = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const error = false;
            let user = {_id:1,email:"johnn@gmail.com",role:"user"};
            if (error) {
                reject({message: "login failed"});
            } else {
                resolve(user);
            }
        },2000);
    });
}
// handeling promise
// userLogin()
//     .then((user) => {
//         console.log("login successful");
//         console.log(user);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

const getPosts = (userId) => {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            const error = false;
            const posts = [{
                _id: 1,
                userId: userId,
                title: "post1"
            },
            {
                _id: 2,
                userId: userId,
                title: "post2"},];
            if (error) {
                reject({message: "getting posts failed"});
            } else {
                resolve(posts);
            }
        },2000);
    });
}
// getPosts(1)
//     .then((posts) => {
//         console.log("posts fetched");
//         console.log(posts);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

const getComments = (postId) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const error = false;
            const comments = [{
                _id: 1,
                postId: postId,
                title: "comment1"
            },
            {
                _id: 2,
                postId: postId,
                title: "comment2"
            },];
            if (error) {
                reject({message: "getting comment failed"});
            } else {
                resolve(comments);
            }
        },2000);
    });
}
// getComments(10)
//     .then((comments) => {
//         console.log("comments fetched");
//         console.log(comments);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// promise chain
userLogin()
    .then((user) => {
        console.log(user);
        return getPosts(user._id);
    })
    .then((posts) =>{
        console.log(posts);
        return getComments(posts[0]._id);
    })
    .then((comments) => {
        console.log(comments);
    })
    .catch((error) => {
        console.log(error);
    });
