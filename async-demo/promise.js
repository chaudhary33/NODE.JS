const p = new Promise((resolve, reject)=>{
    //Kick off the error.
    // resolve(1);
    //When rejected
    setTimeout(() => {
        reject(new Error("message"));
        
    }, 2000);
});

p
    .then(result => console.log("Result: ",result))
    .catch(err => console.log("Error Msg: ",err.message));