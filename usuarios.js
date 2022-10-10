/*export let usuarios = {
    admin:{
        contraseña:"abc123"
    }}*/

if (OpcionPeli === '1') {
    teatros.forEach(function (elemento) {
        console.log(elemento);
    })
    rl.question('Escoge el teatro disponible', (OpcionTeatro) => {
        if (OpcionTeatro === '1') {
            dia.forEach(function (elemento) {
                console.log(elemento);
            })
            rl.question('Escoge el dia', (OpcionDia) => {
                if (OpcionDia === '1') {
                    funciones.forEach(function (elemento) {
                        console.log(elemento);
                    })
                    rl.question('funciones el teatro disponible', (Opcionfuncion) => {
                        if (Opcionfuncion === '1') {
                            rl.question('Cuantas boletas desea adquirir?', (Qsillas) => {
                                console.log('Muchas gracias por su compra');
                                console.log('Peliculas seleccionada:', peli[0]);
                                console.log('Teatro seleccionado:', teatros[0]);
                                console.log('dia seleccionado:', dia[0]);
                                console.log('funcion', dia[0]);
                                console.log('Cantidad de boletas', Qsillas);
                                console.log('Total', Qsillas * ValorBotetaQ);
                            });
                        });
                    if (Opcionfuncion === '2') { funciones[1] }
                    if (Opcionfuncion === '3') { funciones[2] }

                });
            if (OpcionDia === '2') { dia[1] }
            if (OpcionDia === '3') { dia[2] }
            if (OpcionDia === '4') { dia[3] }
            if (OpcionDia === '5') { dia[4] }
            if (OpcionDia === '6') { dia[5] }
            if (OpcionDia === '7') { dia[6] }
        });

}

if (OpcionTeatro === '2') { teatros[1] }
if (OpcionTeatro === '3') { teatros[2] }
                        });
                            
                    }
if (OpcionPeli === '2') { peli[1] }
if (OpcionPeli === '3') { peli[2] }
if (OpcionPeli === '4') { peli[3] }
if (OpcionPeli === '5') { peli[4] }
