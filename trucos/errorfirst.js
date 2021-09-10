function asincrona(callback){
    setTimeout(function () {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    }, 1000)
}

asincrona(function (err, dato) {
    if (err){
        console.error('Tenemos un error');
        console.error(err.message);
        return false;
        //throw err; // En funciones asincronas no funcion
    }
    console.log('Todo ha ido bien mi data es ', dato)
});