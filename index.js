const express = require('express');
const app = express();

app.listen('8080');

//middleware
app.use(express.json());

let author = "Ruben Fontes";

app.route('/').get((req, res) => {
    res.send(author);
});

app.route('/').post((req, res) => {
    res.send(req.body);
});

app.route('/').put((req, res) => {
    author = req.body.author;
    res.send(author);
});

app.route('/:id').delete((req, res) => {
    author = ""; 
    res.send(req.params.id);
});
