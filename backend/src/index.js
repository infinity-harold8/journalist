// temporary fix for my personal pc for MongoDB connection issue
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// ENV
require("dotenv").config();

// Dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const _dirname = path.resolve();
// SET PORT
const PORT = 5000;

// Connect to the Database
const connectToDatabase = require("./configurations/Database");

// Import Routes
const authRouter = require("./routes/AuthRoutes");
const userRouter = require("./routes/UserRoutes");

if (process.env.ENVIRONMENT !== "production") {
  // console.log(true);
  app.use(
    cors({
      origin: process.env.DEVELOPMENT_HOSTNAME,
      credentials: true,
    }),
  );
}

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Use Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

if (process.env.ENVIRONMENT == "production") {
  app.use(express.static(path.join(_dirname, "../../frontend/dist")));
  app.get("*", (request, response) => {
    response.sendFile(
      path.join(_dirname, "../../frontend", "dist", "index.html"),
    );
  });
}

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
  });
});
