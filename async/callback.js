function soyAsincrona(miCallback) {
    setTimeout( function() {
        console.log('Estoy siendo asincrona');
        miCallback();
    } , 1000);
}
console.log('Iniciando proceso ...');
soyAsincrona(function () {
    console.log('Terminando proceso ...')
});


function hola(nombre, miCallback){
    setTimeout(function() {
        console.log(`Hola ${nombre}`);
        miCallback();
    } ,1000);

}

function adios(nombre, otroCallback){
    setTimeout(function (){
        console.log(`Adiós ${nombre}`);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso ...');
hola('Uri', function (){
    adios('Uri', function (){
        console.log('Terminando proceso ...');
    });
});