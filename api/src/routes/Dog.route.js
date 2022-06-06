const {Router} = require('express');
const {getDogs, getDogsById, createDog} = require('./modelRoutes/routes.js');

const router = Router();


router.get('/dogs', getDogs);
router.get('/dogs/:idRaza', getDogsById)
router.post('/dog', createDog)


module.exports = router;