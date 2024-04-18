// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./configs/database.config');
const userRouter = require('./routes/user.routes');

const app = express();

app.use(bodyParser.json());
app.use('/users', userRouter);

app.listen(8000, () => {
  console.log('Server started on port 3000');
});
