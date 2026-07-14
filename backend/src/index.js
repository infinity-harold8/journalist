// temporary fix for my personal pc for MongoDB connection issue
// const dns = require("dns");
// dns.setServers(["8.8.8.8", "1.1.1.1"]);

// ENV
require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

const connectToDatabase = require("./configurations/Database");
// nasa baba kase 
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
  });
});

// Middlewares
app.use(express.json());
app.use(cookieParser());

// lagay mo ito sa env
const allowedOrigin =
  process.env.ENVIRONMENT == "development"
    ? process.env.DEVELOPMENT_HOSTNAME
    : process.env.PRODUCTION_HOSTNAME;

    // console.log(process.env.ENVIRONMENT)
    // console.log(process.env.DEVELOPMENT_HOSTNAME)

app.use(
  cors({
    origin: allowedOrigin,
  }),
);

const authRouter = require("./routes/AuthRoutes");
app.use("/api/auth", authRouter);

const userRouter = require("./routes/UserRoutes");
app.use("/api/users", userRouter);
