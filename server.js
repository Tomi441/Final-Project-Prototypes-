// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/save', (req, res) => {
    // Save user information (placeholder for actual database operation)
    const userInfo = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
    };
    console.log('User information saved:', userInfo);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
