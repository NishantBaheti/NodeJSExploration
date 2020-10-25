const p = new Promise((resolve, reject) => {
  // kick off some async work
  // ...

  setTimeout(() => {
    // 1.
    // resolve(1); // pending => resolved, fulfilled

    // 2.
    reject(new Error("Message")); // pending => rejected
  }, 2000);
});

p.catch;
p.then;

p.then((result) => {
  console.log("Result", result);
}).catch((err) => {
  console.log("Error", err.message);
});

//already resolved promise

const p1 = Promise.resolve({ message: "already resolved promise" });
p1.then((result) => console.log(result));

// already rejected promise
const p2 = Promise.reject(new Error("Error message"));
p2.catch((err) => console.log("ERROR ", err.message));
