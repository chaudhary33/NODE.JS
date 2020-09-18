const p = Promise.reject(new Error("Error Message"));

p.then(err => console.log(err));