const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ];
    res.json(users);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
