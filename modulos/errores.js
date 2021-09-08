function otraFuncion() {
    serompe();
}

function serompe (){
    return 3 + z;
}

function seRompeAsincrona (callback){
    setTimeout(function (){
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en mi funcion asincrona');
            callback(err);
        }
        
    })
}

try{
    //otraFuncion();
    seRompeAsincrona(function (err){
        console.log(err.message);
    });
} catch (err){
    console.error('Algo ha tenido un error');
    console.error(err.message);
    console.log('No pasa nada, hemos capturado el error');
}
console.log('Esto esta al final, al utilizar try-catch se seguira ejecutando nuestro codigo');