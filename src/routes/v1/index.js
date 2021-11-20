const express = require('express');
// const authRoute = require('./auth.route');
const scrapeRoute=require('./scrape.route');
const router = express.Router();
const defaultRoutes = [
    {
      path: '/scrape',
      route: scrapeRoute,
    },
  ];

  defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });

  module.exports = router;