/*Async and Await in JavaScript is used to simplify handling asynchronous operations using promises. 
SYNTAX:
1.Use "async" before a function declaration to make it return a Promise.
2.Use "await" inside an async function to pause execution until a Promise is resolved or rejected.

It makes it easier to read and write compared to using .then() and .catch() with Promises.

ASYNC func always returns a promise
-> async function myFunc(){...}

AWAIT pauses the execution of its surrounding async function until the promise is settled

*/
async function hello (){
    console.log("hello");
}
hello()


/********REFER TEST2 FOR EXAMPLE*********/


function api(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve("success");  
        },3000)
    })
}

function api2(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data2");
            resolve("success");  
        },3000)
    })
}


async function getData() {
    await api();
    await api2();;    
}
getData();