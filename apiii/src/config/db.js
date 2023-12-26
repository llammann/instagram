const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected MongoDB");
  })
  .catch((err) => {
    console.log("failed" + err);
  });
