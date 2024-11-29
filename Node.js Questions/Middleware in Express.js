const express = require('express');
const app = express();

// Middleware function
const loggerMiddleware = (req, res, next) => {
    console.log(`HTTP Method: ${req.method}, URL: ${req.url}`);
    next();
};

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
