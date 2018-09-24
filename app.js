const express = require("express");

const exphbs = require("express-handlebars");

const env = require("./.env");

const passportSetup = require("./config/passportSetup");

const mongoose = require("mongoose");

mongoose.connect(env.mongoDB.URL, { useNewUrlParser: true })
    .then( () => console.log("Connected to Database Successfully") )
    .catch( err => console.log(err) )

const app = express();

// Adding views engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// serving static assets
app.use(express.static("assets"));

// Loading Routes
const authRoutes = require("./routes/authRoutes");
const generalRoutes = require("./routes/generalRoutes");

// Using Routes
app.use(generalRoutes);
app.use("/auth", authRoutes);


app.listen(env.port, () => {
    console.log(`Application is serving on http://localhost:${env.port}`);
});
