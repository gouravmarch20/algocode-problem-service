const express = require("express");

const problemRouter = require("./problems.routes");
const userRouter = require("./user.routes");

const v1Router = express.Router();

// If any request comes and route continues with /problems, we map it to problemRouter
v1Router.use("/problems", problemRouter);
v1Router.use("/user", userRouter);

module.exports = v1Router;
