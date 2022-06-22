const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./index");

const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "postgres",
//   password: "postgres",
//   port: 5433,
// });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App running....`);
});

module.exports = pool;
