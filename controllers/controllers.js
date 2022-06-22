const { response } = require("..");
const pool = require("./../queries");

const writeMessageDb = async (request, response) => {
  const { username, message } = request.body;
  pool.query(
    "INSERT INTO api (name, message) VALUES ($1, $2) RETURNING *;",
    [username, message],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.redirect("/");
    }
  );
};

const readCreatePage =
  ("/create",
  (req, res) => {
    res.render("create");
  });

const getMessages = async (request, response) => {
  pool.query("SELECT * FROM api ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.render("main", { item: results.rows });
  });
};

const getMessageById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM api WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.render("read", { data: results.rows[0] });
  });
};

const readMsgToUpdate = async (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM api WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.render("update", { data: results.rows[0] });
  });
};

const updateMessage = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, message } = request.body;

  pool.query(
    "UPDATE api SET name = $1, message = $2 WHERE id = $3",
    [name, message, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.redirect("/");
    }
  );
};

const deleteMessage = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM api WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.redirect("/");
  });
};

module.exports = {
  getMessages,
  getMessageById,
  deleteMessage,
  writeMessageDb,
  readCreatePage,
  readMsgToUpdate,
  updateMessage,
};
