// Q12.js
// L0 - Implementing setTimeout for Delayed Messages

console.log("Message 1");

setTimeout(() => {
    console.log("Message 2 after 2 seconds");
}, 2000);

console.log("Message 3");

// Expected Output:
// Message 1
// Message 3
// (after 2 seconds)
// Message 2 after 2 seconds

// Explanation:
// "Message 2" is delayed because setTimeout runs asynchronously,
// allowing "Message 3" to execute immediately after "Message 1".
