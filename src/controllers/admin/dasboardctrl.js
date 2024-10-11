const { validationResult } = require("express-validator");
const { students } = require("../../models/Student");

const dashboardctrl = (req, res) => {
  // data bsaes in serst
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    const studentobj = new students({
      name: req.query.name,
      surname: req.query.surname,
    });
    studentobj
      .save()
      .then(() => {
        res.status(200).json({
          message: "Data saved successfully",
          name: req.query.name,
          surname: req.query.surname,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  }
};

module.exports = dashboardctrl;
