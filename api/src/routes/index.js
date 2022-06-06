const { Router } = require('express');
const dogRoute = require('./Dog.route.js');
const temperamentRoute = require('./Temperament.route.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', dogRoute);
router.use('/', temperamentRoute);

module.exports = router;
