const {Router} = require('express');
const {getAndCreateTemps} = require('./modelRoutes/routes.js')

const router = Router();

router.get('/temperament', getAndCreateTemps)

module.exports = router;