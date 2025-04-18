const express = require('express');
const app = express();
const port = 300;


app.use(express.json());


app.post('/average', (req, res) => {
    const { numbers } = req.body;


    if (!Array.isArray(numbers) || numbers.length === 0) {
        return res.status(400).json({ error: 'Please provide a non-empty array of numbers.' });
    }

    const total = numbers.reduce((acc, num) => acc + num, 0);
    const average = total / numbers.length;

    res.json({ average });
});


app.listen(port, () => {
    console.log(`Average calculator service running at http://localhost:300{port}`);
});