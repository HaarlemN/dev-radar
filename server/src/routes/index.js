const { Router } = require('express');

// Routes
const devs = require('./devs.routes');
const search = require('./search.routes');

const routes = Router();

routes.use(devs);
routes.use(search);

module.exports = routes;
