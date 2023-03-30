const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { mongoUri } = require("./data");
const authRouter = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());
app.use(authRouter);

mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
