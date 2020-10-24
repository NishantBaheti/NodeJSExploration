console.log("Before");

setTimeout(() => {
  console.log("Reading a user from database ");
}, 2000);

console.log("After");

// print sequece would appear in command line
// 1. Before
// 2. After
// 3. Reading a user from database
