const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.MONGO_URI


app.use(express.json());
app.use(cors());


app.use("/", require("./Routes/AdminRoutes"));
app.use("/", require("./Routes/HostelRoutes"));
app.use("/", require("./Routes/UserRoutes"));

//Database and server created

const PORT = process.env.PORT || 5000;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected...");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Error occurred");
  });
