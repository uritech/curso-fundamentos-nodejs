console.log('Nos permite ver algo');
console.info('Es lo mismo que log');
console.error('Indicamos un error y lo envía de un color diferente en la consola');
console.warn('Lanzamos un warning es muy parecido a error');

var tabla = [
    {
        a:1,
        b:'Z'
    },
    {
        a:2,
        b:'Otra'
    }
]
console.table(tabla);

console.group('Conver');
console.log('Hola');
console.log('Blablabla');
console.log('Adios');
console.groupEnd('Conver');

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');