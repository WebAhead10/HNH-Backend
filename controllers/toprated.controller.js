const db = require("../database/connection");

module.exports = (req, res) => {
  console.log(req.params.name);
  db.query("SELECT * FROM workers WHERE jobtitle = $1", [req.params.name])
    .then((results) => {
      //
      res.status(200).send({
        success: true,
        workers: results.rows,
      });
    })
    .catch(() => {
      res.status(500).send({ success: false });
    });
};
