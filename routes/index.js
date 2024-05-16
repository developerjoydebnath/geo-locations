const router = require('express').Router();
const geoRouter = require('../routes/geo.route');

router.use('/geo', geoRouter);

module.exports = router;
