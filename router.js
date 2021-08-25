const router = require("express").Router();
const signup = require("./controllers/signup.controller");
const login = require("./controllers/login.controller");
const allUsers = require("./controllers/users.controller");
const workers = require("./controllers/workers.controller");
const verifyUser = require("./middleware/verifyUser");

router.post("/signup", signup);
router.get("/signup", signup);
router.post("/login", login);
router.get("/workers", workers);
router.get("/users", verifyUser, allUsers);

module.exports = router;
