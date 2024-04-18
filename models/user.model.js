const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 5,
    required: true,
  },
 
});

// userschema.pre(
//   "save",
//   async function (next) {
//     try {
//       if (this.isModified("password")) {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//       }
//       next();
//     } catch (error) {
//       console.log(error);
//       next(error);
//     }
//   },
  
// );
const User2 = mongoose.model("User2", userschema);

module.exports = User2;
