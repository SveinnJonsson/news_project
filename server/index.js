import express from 'express';

const app = express();

app.use('/', (req, res) => {
    res.send("Hello World");
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`))