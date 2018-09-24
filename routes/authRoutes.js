const express = require("express");

const router = express.Router();

const passport = require("passport");

router.get("/login",(req,res)=>{
    // render login page
    res.render("login");
});

router.get("/google",passport.authenticate("google",{
    scope:['profile']
}));

router.get("/google/callback",passport.authenticate("google"),(req,res)=>{
    // This is url to which user will be redirected after google authentication
    res.send("This is callback page")
});

module.exports = router;