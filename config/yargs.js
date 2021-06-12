//  Importando Yargs
const argv = require('yargs')
                    .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption : true,
                    describe : 'Base de la Tabla de Multiplicar'
                    })
                    .option('l', {
                        alias : 'listar',
                        type : 'boolean',
                        demandOption : true,
                        default : false,
                        describe : 'Listar o no la tabla de multiplicacion'
                    })
                    .option('h', {
                        alias : 'Hasta',
                        type : 'number',
                        demandOption : true,
                        describe : 'Hasta donde quieres Multiplicar'
                    })              
                    .check((argv, option) =>{
                        if(isNaN(argv.b)){
                            throw 'La base tiene que ser un numero'
                        }
                        return true;
                    })
                    .argv;


module.exports = argv;