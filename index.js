const express = require("express");
const mongoose = require("mongoose");
const config = require("./database");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen("8000", () => {
  console.log("Starting server in port 8000");
});

mongoose
  .connect(config.url)
  .then(() => {
    console.log("successfully connected to the database");
  })
  .catch((error) => {
    console.error(`Upps there was an error ${error}`);
  });

// Routes
require("./app/routes/products.routes")(app);
require("./app/routes/commentProduct.routes")(app);
