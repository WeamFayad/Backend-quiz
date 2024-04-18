const express = require("express");
const app = express();
const { connectToMongoDb } = require("./configs/database.config");
require("dotenv").config();

app.listen(8000, () => {
    console.log("listening");
    connectToMongoDb()
  });
