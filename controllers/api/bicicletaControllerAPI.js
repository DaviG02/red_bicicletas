var  Bicicleta = require('../../models/bicicleta');
//Metodo mostrar de la api 
exports.bicicleta_list= function(req,res){
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
}
//Metodo create de la api
exports.bicicleta_create = function(req,res){
    var bici = new Bicicleta(req.body.code, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];

    Bicicleta.add(bici);

    res.status(200).json({
        bicicleta: bici
    });
}

//Metodo que modifica de la api (FALTA)
exports.bicicleta_update = function(req,res){
    var bici = Bicicleta.findByCode(req.body.code);
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.lng];
    res.status(200).send(req.body);
}

//Metodo eliminar de la api
exports.bicicleta_delete = function(req,res){
    Bicicleta.removeByCode(req.body.code);
    res.status(204).send();
}