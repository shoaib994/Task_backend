const express = require('express');

const router = express.Router();

const { getCity, getMedical,generateFile} = require('../controller/user');



router.get('/get_city', getCity);
router.get('/get_medical', getMedical);
router.post('/create_file', generateFile);


module.exports = router;