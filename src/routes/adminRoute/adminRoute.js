const express = require("express");

const dashboardctrl = require("../../controllers/admin/dasboardctrl");

const { validatorfu } = require("../../validators/adashboardval");
const adminRoute = express.Router();

// Admin routes
adminRoute.get("/dashboard", validatorfu, dashboardctrl);

module.exports = adminRoute;
