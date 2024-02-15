alert('hola mundo');
// console.info('Clahs of Clans');
// console.error('Error');
// console.warn('Advertencia');
// console.assert(1 === 2, 'No son iguales');

var precio = 100;
console.log(precio);

let nombre = prompt('Cual es tu nombre?');
console.log("Hola "+ nombre);

if(confirm('Deseas continuar?')){
    console.log('Continuamos')
    }else{
        console.log('Cancelamos')
    }

function atacar(){
    console.log('Atacar a los goblins');
}

atacar();

//funciones modernas
let accion = () => {
    console.log('Construir');
}

console.log(accion);
accion();

// arreglos
const arreglo = ['Elemento'];
const arreglo2 = new Array('Elemento');

arreglo.push("Otro elemento");
arreglo[10] = 'uno mas';

arreglo['dos'] = 2;
console.log(arreglo);

// recorrer el arreglo de valores
for (let posicion of arreglo){
    console.log(posicion);
}

// recorrer el arreglo de indices
for (let posicion in arreglo){
    console.log(posicion);
}

// objetos
const objeto = {
    nombre: 'Goblin',
    vida: 100,
    atacar: function(){
        console.log('Atacar');
    }
};