import app from "./app.js";
import dotenv from 'dotenv';
import connectDb from "./db/connectDb.js";

dotenv.config();

const PORT = process.env.PORT || 5000;


connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  }).catch((error) => {
    console.log("ERROR connecting to db", error)
  })