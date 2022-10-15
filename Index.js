const { type } = require('os');
const { monitorEventLoopDelay } = require('perf_hooks');
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
peli = ["1. Sonrie", "2. Socios por acciente", "3. La mujer rey", "4. Muerte Muerte Muerte", "5. Encuentros diabolicos"]
teatros = ["1.Centro Mayor", "2.Nuestro Bogotá", "3.Titan Plaza"];
dia = ["1.Lunes", "2.Martes", "3.Miércoles", "4.Jueves", "5.Viernes", "6.Sábado", "7.Domingo"];
funciones = ["1. 8:45pm", "2. 8:50pm", "3. 9:20pm"];
let ValorBoleta = 21700;
let ValorBotetaQ = parseInt(ValorBoleta);

console.log('Bienvenido al cine')

rl.question('Ingresa tu usuario: ', (usuario) => {
    
if(usuario === 'admin'){
    rl.question('Ingresa tu contraseña: ', (contraseña)=> {
        if(contraseña === 'abc123'){
        console.log('Bienvenido ', usuario, ' al Menu');
        rl.question(' 1.Registro de ventas de taquillas \n 2.Visualización de taquillas disponibles \n 3.Visualización del estado general de ventas por teatro y película \n 4.Visualización del ranking de las tres películas más vistas \n 5.Actualización de tarifas según teatro y localidad \n', (option)=> {
            if(option === '1'){
                console.log('Bienvenido ', usuario, 'a Registro de ventas de taquillas');
                peli.forEach(function (elemento) {
                    console.log(elemento);});

                rl.question('Escoge la pelicula que deseas ver ' , (OpcionPeli) => {
                    if (OpcionPeli === '1') {
                        teatros.forEach(function (elemento) {
                            console.log(elemento);});

                        rl.question('Escoge el teatro disponible ', (OpcionTeatro) => {
                            if (OpcionTeatro === '1') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                });
                            }
                            if (OpcionTeatro === '2') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones del teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                });}
                            if (OpcionTeatro === '3') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones del teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[0]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                }); }
                            });
                        
                    }
                    if (OpcionPeli === '2') {teatros.forEach(function (elemento) {
                        console.log(elemento);});

                    rl.question('Escoge el teatro disponible ', (OpcionTeatro) => {
                        if (OpcionTeatro === '1') {
                            dia.forEach(function (elemento) {
                                console.log(elemento);
                            });

                            rl.question('Escoge el dia disponible ', (Opciondia) => {

                                if (Opciondia === '1') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);});
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ' , Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    });

                                }
                                if (Opciondia === '2') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[1]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    }); }
                                if (Opciondia === '3') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[2]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    });
}
                                if (Opciondia === '4') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[3]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
}
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    }); }
                                if (Opciondia === '5') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[4]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    }); }
                                if (Opciondia === '6') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[5]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if(Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
                                        }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
                                        }

                                    }); }
                                if (Opciondia === '7') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[6]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
                                        }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[0]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
                                        }

                                    }); }
                            });
                        }
                        if (OpcionTeatro === '2') {
                            dia.forEach(function (elemento) {
                                console.log(elemento);
                            });

                            rl.question('Escoge el dia disponible ', (Opciondia) => {

                                if (Opciondia === '1') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);});
                                    rl.question('funciones del teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ' , Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    });

                                }
                                if (Opciondia === '2') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[1]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    }); }
                                if (Opciondia === '3') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[2]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    });
}
                                if (Opciondia === '4') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[3]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
}
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    }); }
                                if (Opciondia === '5') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[4]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    }); }
                                if (Opciondia === '6') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[5]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if(Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
                                        }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
                                        }

                                    }); }
                                if (Opciondia === '7') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[6]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
                                        }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[1]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
                                        }

                                    }); }
                            });}
                        if (OpcionTeatro === '3') {
                            dia.forEach(function (elemento) {
                                console.log(elemento);
                            });

                            rl.question('Escoge el dia disponible ', (Opciondia) => {

                                if (Opciondia === '1') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);});
                                    rl.question('funciones del teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ' , Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    });

                                }
                                if (Opciondia === '2') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[1]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    }); }
                                if (Opciondia === '3') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[2]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    });
}
                                if (Opciondia === '4') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[3]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
}
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    }); }
                                if (Opciondia === '5') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[4]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            }); }

                                    }); }
                                if (Opciondia === '6') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[5]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if(Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
                                        }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
                                        }

                                    }); }
                                if (Opciondia === '7') {
                                    funciones.forEach(function (elemento) {
                                        console.log(elemento);
                                    });
                                    rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                        if (Opcionfuncion === '1') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[6]);
                                                console.log('funcion: ', funciones[0]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });

                                        }
                                        if (Opcionfuncion === '2') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[1]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
                                        }
                                        if (Opcionfuncion === '3') {

                                            rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                console.log('Muchas gracias por su compra');
                                                console.log('Peliculas seleccionada: ', peli[1]);
                                                console.log('Teatro seleccionado: ', teatros[2]);
                                                console.log('dia seleccionado: ', dia[0]);
                                                console.log('funcion: ', funciones[2]);
                                                console.log('Cantidad de boletas: ', Qsillas);
                                                console.log('Total: ', Qsillas * ValorBotetaQ);

                                            });
                                        }

                                    }); }
                            }); }
                        });
}
                    if (OpcionPeli === '3') {
                                
                        teatros.forEach(function (elemento) {
                            console.log(elemento);});

                        rl.question('Escoge el teatro disponible ', (OpcionTeatro) => {
                            if (OpcionTeatro === '1') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                });
                            }
                            if (OpcionTeatro === '2') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones del teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                });}
                            if (OpcionTeatro === '3') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones del teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[2]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                }); }
                            });
                        }
                    if (OpcionPeli === '4') {
                                
                        teatros.forEach(function (elemento) {
                            console.log(elemento);});

                        rl.question('Escoge el teatro disponible ', (OpcionTeatro) => {
                            if (OpcionTeatro === '1') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                });
                            }
                            if (OpcionTeatro === '2') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones del teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                });}
                            if (OpcionTeatro === '3') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones del teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[3]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                }); }
                            });

                                
                        teatros.forEach(function (elemento) {
                            console.log(elemento);});

                        rl.question('Escoge el teatro disponible ', (OpcionTeatro) => {
                            if (OpcionTeatro === '1') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                });
                            }
                            if (OpcionTeatro === '2') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones del teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                });}
                            if (OpcionTeatro === '3') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones del teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                }); }
                            });
                                                }
                    if (OpcionPeli === '5') {
                                
                        teatros.forEach(function (elemento) {
                            console.log(elemento);});

                        rl.question('Escoge el teatro disponible ', (OpcionTeatro) => {
                            if (OpcionTeatro === '1') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[0]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                });
                            }
                            if (OpcionTeatro === '2') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones del teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[1]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                });}
                            if (OpcionTeatro === '3') {
                                dia.forEach(function (elemento) {
                                    console.log(elemento);
                                });

                                rl.question('Escoge el dia disponible ', (Opciondia) => {

                                    if (Opciondia === '1') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);});
                                        rl.question('funciones del teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ' , Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });

                                    }
                                    if (Opciondia === '2') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[1]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '3') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[2]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        });
}
                                    if (Opciondia === '4') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[3]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
}
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '5') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[4]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                }); }

                                        }); }
                                    if (Opciondia === '6') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[5]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if(Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                    if (Opciondia === '7') {
                                        funciones.forEach(function (elemento) {
                                            console.log(elemento);
                                        });
                                        rl.question('funciones el teatro disponible ', (Opcionfuncion) => {
                                            if (Opcionfuncion === '1') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[6]);
                                                    console.log('funcion: ', funciones[0]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });

                                            }
                                            if (Opcionfuncion === '2') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[1]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }
                                            if (Opcionfuncion === '3') {

                                                rl.question('Cuantas boletas desea adquirir? ', (Qsillas) => {
                                                    console.log('Muchas gracias por su compra');
                                                    console.log('Peliculas seleccionada: ', peli[4]);
                                                    console.log('Teatro seleccionado: ', teatros[2]);
                                                    console.log('dia seleccionado: ', dia[0]);
                                                    console.log('funcion: ', funciones[2]);
                                                    console.log('Cantidad de boletas: ', Qsillas);
                                                    console.log('Total: ', Qsillas * ValorBotetaQ);

                                                });
                                            }

                                        }); }
                                }); }
                            });
                        }
                });
                

                }else{
                console.log('aun esta en construcción');    
            }
        } )

    }else{
        console.log('contraseña incorecta---')
    }});
}else{
    console.log('usuario incorrecto---');
   
}
});

