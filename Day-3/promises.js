/* A Promise is an object that represents the eventual completion (or failure) of an 
asynchronous operation and its resulting value.

"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result

A Promise contains both the producing code and calls to the consuming code.

**States of a Promise:
A Promise can be in one of three states:

*Pending*: The initial state, neither fulfilled nor rejected.(undefined)
*Fulfilled*: The operation was completed successfully.(a result value)
*Rejected*: The operation failed.(an error object)
Once fulfilled or rejected, the state of the Promise is immutable.
*/


//CODE:
        /*let promise= new Promise((resolve,reject)=>{
            console.log("I'm a Promise");
            resolve(123);       // to fulfill the status of promise
            //reject("some error");
        }); // syntax for promises*/


//if we want a promise to do some work after getting fullfilled:
            // use promise.then((res)=>{...})

//if we want a promise to do some work after getting rejected:
            // use promise.catch((err)=>{...})


//CODE:
// const getPromise= () =>{
//     return new Promise((resolve,reject)=>{
//     console.log("I'm a Promise");
//     resolve("success"); //res
//     //reject("some error") //err      
// });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfullied", res);    
// });

// promise.catch((err)=>{
//     console.log("Rejected", err);
    
// });


/*****PROMISE CHAINING******/

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data1");
            resolve("success");
            
        }, 4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data2");
            resolve("success");
            
        }, 4000);
    });
}

/*console.log("fetching data 1...");
let p1=asyncFunc1();
p1.then((res)=>{
    console.log(res);
});

console.log("fetching data 2...");
let p2=asyncFunc2();
p2.then((res)=>{
    console.log(res);
});*/

//the problem here is that both the data is printing together but we want data 1 to get printed first 
// and then after that we want our data 2. To solve this we use PROMISE CHAINING:

console.log("fetching data 1...");
let p1=asyncFunc1();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data 2...");
    let p2=asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    });   
});







// function getData(dataId, getNextData){
//     return new promise((resolve,reject)=>{
//         setTimeout(()=> {
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData()
//             }
            
//         },5000);
//     })  ;  
// }
// let promise1 = getData(123);