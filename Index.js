const { type } = require('os');
const { monitorEventLoopDelay } = require('perf_hooks');
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

console.log('Bienvenido al cine')

rl.question('Ingresa tu usuario: ', (usuario) => {
    
if(usuario === 'admin'){
    rl.question('Ingresa tu contraseña: ', (contraseña)=> {
        if(contraseña === 'abc123'){
        console.log('Bienvenido ', usuario, ' al Menu');
        rl.question(' 1.Registro de ventas de taquillas \n 2.Visualización de taquillas disponibles \n 3.Visualización del estado general de ventas por teatro y película \n 4.Visualización del ranking de las tres películas más vistas \n 5.Actualización de tarifas según teatro y localidad \n', (option)=> {
            if(option === '1'){
                peli = ["1. Sonrie","2. Socios por acciente","3. La mujer rey","4. Muerte Muerte Muerte", "5. Encuentros diabolicos"] 
                teatros = ["1.Centro Mayor", "2.Nuetro Bogotá", "3.Titan Plaza"];
                dia = ["1.Lunes","2.Martes","3.Miércoles","4.Jueves","5.Viernes","6.Sábado","7.Domingo"];
                funciones = ["1. 8:45pm","2. 8:50pm","3. 9:20"];
                let sillas;
                let sillasQ = parseInt(sillas);
                let ValorBoleta = 21700;
                let ValorBotetaQ = parseInt(ValorBoleta);

                console.log('Bienvenido ', usuario, 'Registro de ventas de taquillas');
                rl.question('Escoge la pelicula que deseas ver',(OpcionPeli)=>{
                    
                    peli.forEach(function(elemento) {
                        console.log(elemento);
    
                        if( OpcionPeli === peli[0]){
                            console.log('Teatros disponibles');
                            Teatros.forEach(function(elemento) {
                                console.log(elemento);})
                        
                        }
                });                
               

                  });
                

                }else{
                console.log('aun esta en construcción');    
            }
        } )

    }else{
        console.log('contraseña incorecta---')
    }});
}else{
    rl.setPrompt('usuario incorrecto---');
   
}
});

