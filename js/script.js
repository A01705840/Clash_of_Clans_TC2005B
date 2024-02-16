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

console.log(objeto);

// modificar html
//document.write('Hola mundo');


// 1:
//Ingresar numero de filas y columnas
let fila  = prompt('Ingrese un número');
let columna = prompt('Ingrese un número');
//Hacer multiplicació de flas y columnas
let mult= fila * columna;
//Imprimir tabla
document.write("<table border>");
//Imprimir las filas de la tabla
for (let i = 0; i < fila; i++){
    //Se imprime con <tr> para que se vea como una tabla
    document.write("<tr>");
    //Imprimir las columnas de la tabla
    for(let j = 0; j < columna; j++){
        //Se imprime con <td> para que se vea como una tabla
        document.write("<td>");
        //Imprimir el número de la fila y columna
        document.write(mult);
        //Ir disminuyendo mult
        mult--;
        //Se cierra la columna
        document.write("</td>");
    }
    document.write("</tr>");
}
/*1:
Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida

2:
Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
3:
Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
4:
Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
5:
Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.
6:
Crea una solución para un problema de tu elección 
(puede ser algo relacionado con tus intereses, alguna problemática que hayas identificado en algún ámbito, un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM, entre otros). El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos. Muestra los resultados en el documento HTML. */