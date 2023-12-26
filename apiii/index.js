const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const port = process.env.PORT || 3333;

const cors = require("cors");
app.use(cors());

require("dotenv").config();
require("./src/config/db");

app.use(express.json());

const UserRouter = require("./src/routers/UserRouter"); // new
app.use("/", UserRouter); // new

// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Instagram Users");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
