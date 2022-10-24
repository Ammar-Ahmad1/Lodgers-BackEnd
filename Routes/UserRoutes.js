const {registerUser} = require('../Controllers/UserController');
const router = require('express').Router();
router.post('/register-user', registerUser);
module.exports = router;