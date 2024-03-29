const router = require("express").Router();
const signup = require("./controllers/signup.controller");
const login = require("./controllers/login.controller");
const allUsers = require("./controllers/users.controller");
const workers = require("./controllers/workers.controller");
const jobTitles = require("./controllers/jobTitles.controller");
const singleWorker = require("./controllers/singleWorker.controller");
const singleOrder = require("./controllers/workerOrder.controller");
const appointments = require("./controllers/appointments.controller");
const toprated = require("./controllers/toprated.controller");
const verifyUser = require("./middleware/verifyUser");

router.post("/signup", signup);
router.get("/signup", signup);
router.post("/login", login);
router.get("/workers", workers);
router.get("/users", verifyUser, allUsers);
router.get("/job-title/:name", jobTitles);
router.get("/worker/:id", singleWorker);
router.get("/order/:id", singleOrder);
router.post("/order/:id", appointments);

router.get("/toprated/:name", toprated);

module.exports = router;
