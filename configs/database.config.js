const { default: mongoose } = require("mongoose");

//Function to invoke connection to MongoDB
const connectToMongoDb = () => {
  mongoose.connect("mongodb://localhost:27017/weam");
  const connection = mongoose.connection;
  connection.on("error", (error) => {
    console.log("error connecting", error);
  });
  connection.once("open", () => {
    console.log("Connected to DB");
  });
};
module.exports = { connectToMongoDb };
