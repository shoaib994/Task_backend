const express = require('express');

const router = express.Router();

const { getCity, getMedical} = require('../controller/user');



router.get('/get_city', getCity);
router.get('/get_medical', getMedical);


module.exports = router;