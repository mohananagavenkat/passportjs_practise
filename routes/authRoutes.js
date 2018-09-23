const express = require("express");

const router = express.Router();

router.get("/login",(req,res)=>{
    // render login page
});

router.get("/google-login",(req,res)=>{
    // have to handle google authentication with passport
});

router.get("login",(req,res)=>{
    // render login page
});

module.exports = router;