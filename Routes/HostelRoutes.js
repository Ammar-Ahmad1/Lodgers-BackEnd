const {addHostel,getHostels, getHostelsByOwner} = require('../Controllers/HostelController');
const upload = require('../Middlewares/multer');
const router = require('express').Router();
router.post('/add-hostel',upload.single("image"), addHostel);
router.get('/get-hostels', getHostels);
router.get('/get-hostels/:owner', getHostelsByOwner);
module.exports = router;