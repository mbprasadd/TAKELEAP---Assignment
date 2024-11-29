function fetchUserData() {
    return new Promise((resolve, reject) => {
        // Simulate a DB call
        setTimeout(() => {
            const data = { id: 1, name: 'John Doe' };
            resolve(data);
        }, 1000);
    });
}

fetchUserData()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
