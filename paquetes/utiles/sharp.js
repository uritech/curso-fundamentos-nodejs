const sharp = require('sharp');

sharp('/Users/uribarranco/Documents/Cursos/curso-fundamentos-nodejs/paquetes/utiles/original.png',)
    .resize(80)
    .toFile('/Users/uribarranco/Documents/Cursos/curso-fundamentos-nodejs/paquetes/utiles/resized.png')