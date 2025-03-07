const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
const authRouter = require("./routers/auth");
const { logger } = require("./middleware");
const { authenticate } = require("./middleware");

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(logger);
app.use("/auth", authRouter);
app.use(authenticate);
app.use("/users", usersRouter);


app.get("/", (req, res) => {
  res.send("Welcome to our server!");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
