const {registerUser, updateUser, getUserById} = require('../Controllers/UserController');
const router = require('express').Router();
router.post('/register-user', registerUser);
router.put('/update-user/:id', updateUser);
router.get('/get-user/:id', getUserById);


module.exports = router;