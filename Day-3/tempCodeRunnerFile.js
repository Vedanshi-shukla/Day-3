function api(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve("success");  
        },3000)
    })
}

async function getDta() {
    await api();
}
