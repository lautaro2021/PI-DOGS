const {Router} = require('express');
const {getDogs, getDogsById, createDog, deleteDog} = require('./modelRoutes/routes.js');

const router = Router();


router.get('/dogs', getDogs);
router.get('/dogs/:idRaza', getDogsById)
router.post('/dog', createDog)
router.delete('/delete/:idRaza', deleteDog)

module.exports = router;