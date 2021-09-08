let i = 0;
let intervalo = setInterval(function () {
    console.log('Hola');
    console.log(__dirname);
    console.log(__filename);
    if (i === 3){
        clearInterval(intervalo);
    }
    i++;
}, 1000);
