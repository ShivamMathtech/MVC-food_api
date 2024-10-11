const mongoose = require("mongoose");
const env = require("dotenv");
env.config();
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PSWD}@cluster0.4lh7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then((d) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  })
  .finally();
module.exports = {
  mongoose: mongoose,
};
