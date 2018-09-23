const express = require("express");

const exphbs = require("express-handlebars");

const app = express();

// Adding views engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Loading Routes

const authRoutes = require("./routes/authRoutes");

// Using Routes

app.use("/auth", authRoutes);
