var Bicicleta = require('../../models/bicicleta');
//comparar 17:34
exports.bicicleta_list = function(req, res) {
        res.status(200).json({
            bicicletas: bicis
        });
};

exports.bicicleta_create = function(req, res) {
    var bici = new Bicicleta(req.body.code, req.body.color, req.bod.modelo);
    bici.ubicacion=[req.body.lat, req.body.lng];
    Bicicleta.add(bici);

    res.status(204).json({
        bicicleta:bici
    });
}

exports.bicicleta_update = function(req, res) {
    
    Bicicleta.findByCode(req.body.code, function(err, targetBici) {
        targetBici.color = req.body.color;
        targetBici.modelo = req.body.modelo;
        targetBici.ubicacion = [req.body.lat, req.body.lng];
        targetBici.save();
    
        res.status(200).json({
            bicicleta: targetBici
        });
    });
    
};

exports.bicicleta_delete = function(req, res) {
    Bicicleta.removeByCode(req.body.code);
        res.status(204).send();
}