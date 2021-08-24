const express = require('express');
const route = express.Router();

const siteController = require('../app/controllers/SiteController.js');
route.get('/search', siteController.search);
route.get('/', siteController.index);

module.exports = route;