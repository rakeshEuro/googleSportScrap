const httpStatus = require('http-status');
const  scrapeServices  = require('../../services/v1/scrape.services');
const getGoogleSports = async (req, res) => {
    const googleSports = await scrapeServices.getGoogleSports();
    if(!googleSports){
        res.status(httpStatus.NO_CONTENT).send();
    }
    res.status(200).send(googleSports);
  };

  module.exports = {
    getGoogleSports
  };