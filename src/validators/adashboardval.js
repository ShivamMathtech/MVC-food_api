const { check } = require("express-validator");
let validatorfu = [
  check("name", "name is required not empty").notEmpty(),
  check("surname", "name is required not empty").notEmpty(),
];

exports.validatorfu = validatorfu;
