const express = require('express');
const router = express.Router();
const scrapeController = require('../../controllers/v1/scrape.controller');

router.get('/renderGoogleSports', scrapeController.renderGoogleSports);
router.get('/getGoogleSports', scrapeController.getGoogleSports);
module.exports = router;