const {registerUser, updateUser} = require('../Controllers/UserController');
const router = require('express').Router();
router.post('/register-user', registerUser);
router.put('/update-user/:id', updateUser);


module.exports = router;