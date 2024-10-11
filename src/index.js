const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const adminRoute = require("./routes/adminRoute/adminRoute");
app.use("/admin", adminRoute);
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
