const {registerUser, updateUser, getUserById} = require('../Controllers/UserController');
const upload = require('../Middlewares/multer')
const router = require('express').Router();

router.post('/register-user',upload.single("image") , registerUser);
router.put('/update-user/:id', updateUser);
router.get('/get-user/:id', getUserById);


module.exports = router;