let suma = 0;

console.time('Suma');
for (i = 0; i < 100000000; i++){
    suma += 1;
}
console.timeEnd('Suma');


function asincrona () {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('Termina el proceso asincrono');
            resolve();
        })
    })
}

console.time('Asincrono');
asincrona()
    .then (() => {
        console.timeEnd('Asincrono');
    })
