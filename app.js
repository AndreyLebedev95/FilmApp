const express = require('express');
const path = require('path');
const app = express();

const distPath = path.join(__dirname, '/dist');

app.use(express.static(distPath));

app.use(function(req, res, next) {
    res.sendFile(path.join(distPath, '/index.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});