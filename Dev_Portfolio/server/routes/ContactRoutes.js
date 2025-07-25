const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');

router.post('/', ContactController.submitContact);

module.exports = router;