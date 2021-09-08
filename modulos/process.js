process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

//On Exit, en ese momento nos hemos desonectado del EventLoop,
//todo lo que se ejecute tendra que ser sincrono.
process.on('exit', () => {
    console.log('El proceso terminó');
});

process.on('uncaughtException', (err, origen) => {
    console.log('Ha habido un error no capturado');
    console.error(err.message);
});

quenoexiste();

console.log('Esto si es el error no se recoge, no se ejecutará');