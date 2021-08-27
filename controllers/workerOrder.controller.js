const db = require("../database/connection");

module.exports = (req, res) => {
  console.log(req.params);

  db.query("SELECT * FROM workers WHERE id = $1", [req.params.id])
    .then((result) => {
      res.send({
        success: true,
        worker: result.rows[0],
      });
    })
    .catch(() => {
      res.send({
        success: false,
      });
    });
};
