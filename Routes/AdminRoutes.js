const {registrerAdmin,login__controller} = require("../Controllers/AdminController");
const router = require("express").Router();
router.post("/register-admin" ,registrerAdmin)
router.post("/login",login__controller)

module.exports = router;
