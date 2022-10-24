const {addHostel,getHostels} = require('../Controllers/HostelController');
const router = require('express').Router();
router.post('/add-hostel', addHostel);
router.get('/get-hostels', getHostels);
module.exports = router;