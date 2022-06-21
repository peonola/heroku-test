const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter");
const messageRouter = require("./routes/messageRouter");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

//app.use("/api/v1/users", userRouter);
app.use("/message", messageRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`App running....`);
});
