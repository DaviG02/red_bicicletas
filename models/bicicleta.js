var Bicicleta = function (code, color, modelo, ubicacion) {
    this.code = code;
    this.color = color;
    this.modelo = modelo,
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function () {
    return 'code: ' + this.code + " | color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findByCode = function(aBiciCode){  //Busqueda de colecciones
    var aBici = Bicicleta.allBicis.find(x => x.code == aBiciCode);
    if (aBici)
        return aBici;
    else 
        throw new Error(`No existe una bicicleta con el code ${aBiciCode}`);
}

Bicicleta.removeByCode = function(aBiciCode) { //Busca y elimina por code
    var aBici = Bicicleta.findByCode(aBiciCode); 
    for(var i = 0; i < Bicicleta.allBicis.length; i++){
        if (Bicicleta.allBicis[i].code == aBiciCode){
            Bicicleta.allBicis.splice(i, 1); //elimina
            break;
        }
    }
}

var a = new Bicicleta(1, 'rojo', 'urbana', [-32.986816,-68.882142]);
var b = new Bicicleta(2, 'azul', 'urbana', [-32.985938,-68.881638]);

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;


