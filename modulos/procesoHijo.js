//ECMAScript 6, de esa forma desestructuramos un objeto
const { exec, spawn } = require('child_process');


//Podemos ejecutar cualquier comando en consola
exec('ls -la', (err, stdout, sterr) => {
    if (err){
        console.error(err);
        return false;
    }
    console.log(stdout);
});

let proceso = spawn('ls', ['-la']);
console.log(proceso);

proceso.stdout.on('data', function (dato) {
    console.log(dato.toString());
});

proceso.on('exit', function() {
    console.log('El proceso ha terminado');
})