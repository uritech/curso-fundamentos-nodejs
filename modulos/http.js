//Creamos un servidor http
const http = require('http');

http.createServer(router).listen(3000);

function router (req, res) {
        console.log('Nueva Peticion!');
        console.log(req.url);

        //Aqui generamos nuestras rutas y respuestas
        switch (req.url) {
            case '/hola':
                res.write('Hola, que tal');
                res.end();
                break;
            
            default:
                res.write('Error 404: No se lo que quieres');
                res.end();
        }
    
}

console.log("Escuchando http en el puerto 3000");