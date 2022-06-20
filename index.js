const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
const cool = require("cool-ascii-faces");

const app = express();
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.set("view engine", "jade");
app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);
app.get("/cool", (req, res) => res.send(cool()));
app.get("/db", db.getDB);

app.listen(process.env.PORT || 3000, () => {
  console.log(`App running....`);
});
