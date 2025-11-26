// Q13.js
// L1 - Simulating a Loading Screen with setInterval

let count = 0;

const loader = setInterval(() => {
    console.log("Loading...");
    count++;

    if (count === 5) {
        clearInterval(loader);
        console.log("Loaded successfully!");
    }
}, 1000);

// Expected behavior:
// "Loading..." prints every second for 5 seconds
// After that: "Loaded successfully!"
