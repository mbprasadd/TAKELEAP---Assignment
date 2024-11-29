function greeting(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function afterGreeting() {
    console.log('This is the callback function being called.');
}

greeting('Alice', afterGreeting);
