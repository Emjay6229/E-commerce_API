const mongoose = require("mongoose");
const { Schema } = mongoose;
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    name: { type: String,
        trim: true,
        required: [true, "Please enter your name"]
      },
    email: { type: String,
          trim: true,
          required: [true, "Please enter your email address"],
          unique: true,
          lowercase: true,
          validate: [isEmail, "Please enter a valid email."]
        },
    password: { type: String,
            required: [true, "Please enter your password"],
            minlength: [8, "Minimum password character is 8"]
          },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    active: {
            type: Boolean,
            default: true 
        },
    },

    { timestamps: true }
  );


// hash password
  userSchema.pre("save", async function(next) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
      next();
  });

// display registration success
  userSchema.post("save", function(newUser, next){
      console.log("Account Created succesfully!", newUser)
      next();
  });

// create static login method
  userSchema.statics.login = async function(email, password) {
    const loggedInUser = await this.findOne({ email });

    // check if email is valid
      if (!loggedInUser) {
        throw Error("Incorrect email.");
      } 

    // Verify if password is correct
    const isMatch = await bcrypt.compare(password, loggedInUser.password);
    if (!isMatch) {
            throw Error("Incorrect password.");
          }

      return loggedInUser;
  }

module.exports = mongoose.model("User", userSchema);