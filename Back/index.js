const express = require('express');
const bodyParser = require('body-parser');

const listRouter = require('./Routes/List');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/List', listRouter);


app.listen(8000, () => {
    console.log('Server running port 8000...');
})