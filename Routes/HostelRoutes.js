const {addHostel,getHostels, getHostelsByOwner,deleteHostel} = require('../Controllers/HostelController');
const upload = require('../Middlewares/multer');
const router = require('express').Router();
router.post('/add-hostel',upload.single("image"), addHostel);
router.get('/get-hostels', getHostels);
router.get('/get-hostels/:owner', getHostelsByOwner);
router.delete('/delete-hostel/:id', deleteHostel);
module.exports = router;