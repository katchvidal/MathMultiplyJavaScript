
const colors = require('colors');

const fs = require('fs')


const CrearArchivo = async(base = 5, listar=false, hasta =10) => {

    try{ 
             
        let salida = '';
        for ( let i = 1; i <= hasta; i++){
            salida += ` ${base} x ${i} = ${ base * i }  \n`;
        }
        if(listar){        

            console.log('======================================'.green)
            console.log(`   Tabla de Multiplicar de ${base}    `.green)
            console.log('======================================'.green)

            console.log(salida.green)
        }

        //  Accesar al FileSistem
        fs.writeFileSync(`./Doc/Tabla de Multiplicar del ${base}.txt`, salida,);
        return (console.log(`Tabla de Multiplicar del ${base} Creada Exitosamente`.green));

    }catch(err){
         throw err;
    }

}

module.exports = {
    CrearArchivo
}