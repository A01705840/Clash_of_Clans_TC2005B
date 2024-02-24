//fs es el módulo que contiene las funciones 
//para manipular el sistema de archivos
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola mundo desde Node.js');

const te_hackie = () => {
    console.log("jojo te hackié");
}

setTimeout(te_hackie, 7000);

const arreglo = [5000, 60, 90, 100, 10, 20, 1000, 0, 120, 2000, 340, 1000];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

//Una función que recibi un arreglo de números y devuelvaso el promedio
const arreglo_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num_prom = 0;

const promedio = (arreglo_1, num_prom) => {
    for (let item of arreglo_1){
        num_prom += item;
    }
    num_prom = num_prom / arreglo_1.length;
    console.log(num_prom);
}

promedio(arreglo_1,num_prom);

//Una función que reciba un string y escriba un string en un archivo de texto
const escribir = (texto) => {
    texto.writeFileSync('text.txt', texto);
}




const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<!doctype html><html><head> <h1>Hola mundo</h1> </head><body><h2>Este es un servidor web</h2></body></html>");
    response.end();
});    


server.listen(3000); //Puerto en el que escucha el servidor