const db = require("../database/connection");

module.exports = (req, res) => {

  const { workerId, jobYear, jobMonth, jobDay, jobHours, jobMinutes, visaNumber, visaHolder, visaXdate, visaCvc } = req.body;
  if (!workerId || !jobYear || !jobMonth || !jobDay || !jobHours || !jobMinutes || !visaNumber || !visaHolder || !visaXdate || !visaCvc) {
    return res.status(200).send({
      success: false,
      message: "Missing data",
    });
  }

  if (visaNumber.length !== 16 || visaCvc.length !== 3) {
    return res.status(200).send({
      success: false,
      message: "visa is not valid",
    });
  }


  db.query(
    `INSERT INTO appointments (workerId, jobYear, jobMonth,
            jobDay, jobHours, jobMinutes, visaNumber ,visaHolder, 
            visaXdate, visaCvc) VALUES ($1, $2, $3 $4, $5, $6, $7, $8, $9, $10)`,
    [workerId, jobYear, jobMonth, jobDay, jobHours, jobMinutes, visaNumber, visaHolder, visaXdate, visaCvc]
  ).then((result) => {
    // result.rows[0].id -> the id for the new user
    res.status(200).send({
      success: true,
      message: "the appointment has been added successfully!",
    });
  })
    .catch((err) => {
      res.status(200).send({
        success: false,
        message: "Something went wrong! appointment didnt get added",
      });
    });
};
