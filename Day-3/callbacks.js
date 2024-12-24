/*Callbacks are functions passed as arguments to be executed after an asynchronous operation completes.
    It is used to handle responses and ensures non blocking execution.
    Also for managing asynchronous operations, such as reading files, fetching data from an API,
    or handling user inputs.

    Types: 
    Synchronous Callback: Executes immediately during the function execution.
    Asynchronous Callback: Executes after an async operation completes.
*/


//Example 1
function doSomethingAync(callback){
    setTimeout(()=>{              // setTimeout() calls a function after a number of milliseconds.

        console.log("Task completed");
        callback();
    },2000);
}
        
doSomethingAync(()=>{
    console.log("Callback executed");
    
});


//Example 2
function hello(){
    console.log("hello");
    
}

setTimeout(hello,4000);


/*************Callback hell****************/
/*When multiple nested callbacks are used, it can lead to callback hell,
making the code difficult to read and maintain.

Use Promises or Async/Await to simplify and improve readability.*/


//Example 1
setTimeout(() => {
    console.log("First operation complete.");
    setTimeout(() => {
        console.log("Second operation complete.");
        setTimeout(() => {
            console.log("Third operation complete.");
        }, 1000);
    }, 1000);
}, 1000);


//Example 2
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);    
}
//callback hell
getData(1,()=>{
    getData(2,()=>{
        getData(3)
    });
});
//To solve this problem , PROMISES were introduced.
// check test.js  