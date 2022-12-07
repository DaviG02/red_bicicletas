var express = require('express');
var router = express.Router();
var bicicletaController = require('../controllers/api/bicicletaControllerAPI');
/*
router.get('/', bicicletaController, bicicletaController.bicicleta_list);
router.post('/create', bicicletaController, bicicletaController.bicicleta_create);
router.delete('/delete', bicicletaController, bicicletaController.bicicleta_delete);
router.put('/update', bicicletaController, bicicletaController.bicicleta_update);
*/

router.get('/', bicicletaController.bicicleta_list);
router.get('/create', bicicletaController.bicicleta_create_get);
router.post('/create', bicicletaController.bicicleta_create_post);
router.get('/:id/update', bicicletaController.bicicleta_update_get);
router.post('/:id/update', bicicletaController.bicicleta_update_post);
router.post('/:id/delete', bicicletaController.bicicleta_delete_post);


module.exports = router;