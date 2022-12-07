var Bicicleta = require('../models/bicicleta');

exports.bicicleta_list = function(req,res){
    res.render('bicicletas/index', {bicis: Bicicleta.allBicis});
}
//metodo que crea una nueva bicicleta
exports.bicicleta_create_get = function(req,res){
res.render('bicicletas/create');
}

//metodo que crea una nueva bicicleta
exports.bicicleta_create_post = function(req,res){
var bici = new Bicicleta(req.body.code, req.body.color, req.body.modelo);
bici.ubicacion = [req.body.lat, req.body.lng];
Bicicleta.add(bici);
res.redirect('/bicicletas');
}

//metodo que modifica los datos de la bicicleta
exports.bicicleta_update_get = function(req,res){
    var bici = Bicicleta.findByCode(req.params.code);

    res.render('bicicletas/update', {bici});
    }
    
//metodo que modifica los datos de la bicicleta
exports.bicicleta_update_post = function(req,res){
var bici = Bicicleta.findByCode(req.params.code);
bici.code = req.body.code;
bici.color = req.body.color;
bici.modelo = req.body.modelo;
bici.ubicacion = [req.body.lat, req.body.lng];
res.redirect('/bicicletas');
}

//metodo que borra las bicicletas
exports.bicicleta_delete_post = function(req,res){
    Bicicleta.removeByCode(req.body.code);

    res.redirect('/bicicletas');
}