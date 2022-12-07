var mymap = L.map('main_map').setView([-32.98624, -68.87269], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//13min-diferente
    $.ajax({
        dataType: 'json',
        url: 'api/bicicletas',
        succes: function(result){
            console.log(result);

            result.bicicletas.forEach(function(bici) {
                L.marker(bici.ubicacion, {title: bici.id }).addTo(mymap);
            });
        }
    })
