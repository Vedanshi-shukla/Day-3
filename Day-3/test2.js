function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            
        },2000);    
    });
}

// using async await:
async function getAllData() {
    await getData(1);
    console.log("fetching data 2...")
    await getData(2);
    console.log("fetching data 3...")
    await getData(3);
    console.log("fetching data 4...")
    await getData(4);
}

getAllData();