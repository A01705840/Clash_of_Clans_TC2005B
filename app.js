//fs es el módulo que contiene las funciones 
//para manipular el sistema de archivos
const filesystem = require('fs');
const { setTimeout } = require('timers/promises');

filesystem.writeFileSync('hola.txt', 'Hola mundo desde Node.js');

const arreglo = [5000, 60, 90, 100, 10, 20, 1000, 0, 120, 2000, 340, 1000];

for (let item of arreglo){
    setTimeout( () => {
        console.log(item);
    },   item);
}
