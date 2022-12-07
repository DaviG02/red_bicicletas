var Bicicleta = require('../models/bicicleta');

exports.bicicleta_list = function (req, res) {
    res.render('bicicletas/index', {bicis: Bicicleta.allBicis });//diferente
}

exports.bicicleta_create_get = function (req, res) {//
    res.render('bicicletas/create');
}

exports.bicicleta_create_post = function (req, res) {//dif 32
    var bici = new Bicicleta(req.body.code, req.body.color,req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];
    Bicicleta.add(bici);

    res.redirect('/bicicletas');
}

exports.bicicleta_update_get = function (req, res) {  //
    Bicicleta.findByCode(req.params.code, function (err, bici) {
        res.render('bicicletas/update', { bici });
    });
}

exports.bicicleta_update_post = function (req, res) {
    Bicicleta.findByCode(req.params.code, function (err, bici) {
        bici.code=req.body.code;
        bici.color = req.body.color; //falta id code
        bici.modelo = req.body.modelo;
        bici.ubicacion = [req.body.lat, req.body.lng];
        bici.save();
        
        res.redirect('/bicicletas');
    });
}

exports.bicicleta_delete_post = function (req, res) { // function error no
    Bicicleta.removeByCode(req.body.code);
    res.redirect('/bicicletas');

}

exports.bicicleta_show_get = function (req, res) {
    Bicicleta.findByCode(req.params.code, function (err, bici) {
        res.render('bicicletas/show', { bici });
    });
}