const express = require('express');
const { createEnquiry, getEnquiries,  getEnquiriesummm } = require('../controllers/enquiryController');
const router = express.Router();

router.post('/enquiries', createEnquiry);
router.get('/enquiries', getEnquiries);
router.get('/enquiries/:id', getEnquiriesummm);


module.exports = router;
