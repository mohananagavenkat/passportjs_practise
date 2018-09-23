const passport = require("passport");

const googleStrategy = require("passport-google-oauth20");

const env = require("../.env");

passport.use(
  new googleStrategy(env.google, function(
    accessToken,
    refreshToken,
    profile,
    done
  ) {
    // this is passport callback function
  })
);
