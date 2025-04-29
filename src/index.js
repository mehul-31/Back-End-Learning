//Old Way But Ruins the consistancy of code
// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/dbConnection.js";

dotenv.config({
  path: "./env",
});
const port = process.env.PORT || 8000;



connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Unexepected Error Shows Up:", error);
    });
    app.listen(port, () => {
      console.log(`Server Is Running At ${port}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db Connection failed ", err);
  });
