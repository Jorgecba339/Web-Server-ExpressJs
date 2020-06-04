const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'content-type': 'application/json' });

        let salida = {
            nombre: 'Jorge',
            apellido: 'Baigorria',
            ciudad: 'Cordoba',
            url: req.url
        };
        res.write(JSON.stringify(salida));
        // res.write('Web Server de JDB');
        res.end();
    })
    .listen(8080);

console.log('Escuchando puerto 8080');