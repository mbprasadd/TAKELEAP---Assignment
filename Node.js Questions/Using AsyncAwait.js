async function fetchUserDataAsync() {
    try {
        const data = await fetchUserData(); // Reusing the promise function
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

fetchUserDataAsync();
