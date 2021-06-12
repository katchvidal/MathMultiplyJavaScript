//  Logica de la Tabla de Multiplicar
const colors = require('colors')
const {CrearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')



            
//  Tabla de Multiplicar
console.clear()
CrearArchivo(argv.b, argv.l, argv.h)
    .then(res => console.log(res.rainbow, `Tabla de Multiplicar del ${base} Creada Correctamente`))
    .catch(err => console.log('Ha sucedido lamentablmente un error '));

