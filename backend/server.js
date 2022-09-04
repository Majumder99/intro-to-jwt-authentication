const express = require("express");
//dotenv automatically loads environment variable from a .env file into the process .env object
const dotenv = require("dotenv").config();
const router = require("./routes/goalRoutes");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", router);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
