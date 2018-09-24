const passport = require("passport");

const googleStrategy = require("passport-google-oauth20");

const env = require("../.env");

const User = require("../models/userModel");

passport.use(
  new googleStrategy(env.google, function(
    accessToken,
    refreshToken,
    profile,
    done
  ) {
    // this is passport callback function
    User.findOne({ googleID: profile.id }).then(user => {
      if (user) {
        console.log("User Already exist");
        console.table(user);
      } else {
        const newUser = new User({
          name: profile.displayName,
          googleID: profile.id
        });
        newUser.save().then(data => {
          console.log("User Created Successfully");
          console.table(data);
        });
      }
    });
    //console.log(profile);
  })
);
