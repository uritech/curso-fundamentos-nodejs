// Hay 3 tipos de stream,
//Lectura: Hay un origen y el stream manda los datos a otro punto donde se recogen los datos
//Escritura: Donde guardamos los datos que recibimos de un origen
//Lectura/Escritura:

const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

//Stream de escritura
readableStream.setEncoding('utf-8');
readableStream.on('data', function (chunk) {
    data += chunk;
});

readableStream.on('end', function () {
    console.log(data);
});


//Stream de escritura

// process.stdout.write('Hola');
// process.stdout.write('que');
// process.stdout.write('tal');

const transform = stream.Transform;

function Mayus(){
    transform.call(this);
}
util.inherits(Mayus, transform);

Mayus.prototype._transform = function (chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus =new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);