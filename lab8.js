filesystem = require('fs');
const html_header = 
    `<!DOCTYPE html>
    <html>
    <script src="https://cdn.tailwindcss.com"></script>
    <head>
        <meta charset="UTF-8">
        <titleMi Librería</title>
    </head>
    <body class="font-sans">
        <nav class=" bg-purple-300 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <!-- Brand/logo -->
                <a href="#" class=" text-slate-900 font-semibold text-2xl">Lab 10</a>

                <!-- Navbar links -->
                <div class="space-x-4">
                    <a href="#" class=" text-slate-900 hover:bg-purple-500 hover:shadow-md py-4 px-3 rounded-sm">Home</a>
                    <a href="/Add" class=" text-slate-900 hover:bg-purple-500 hover:shadow-md py-4 px-3 rounded-sm">Add</a>
                    <a href="#" class=" text-slate-900 hover:bg-purple-500 hover:shadow-md py-4 px-3 rounded-sm">Services</a>
                    <a href="#" class=" text-slate-900 hover:bg-purple-500 hover:shadow-md py-4 px-3 rounded-sm">Contact</a>
                </div>
            </div>
        </nav>

    </body>
    </html>`;

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
const escribir = (texto, nombreArchivo) => {
    if (!nombreArchivo) {
        nombreArchivo = 'archivotexto.txt';
    }
    filesystem.writeFile(nombreArchivo, texto, (error) => {
        if (error) {
            console.log('Error al escribir el archivo');
        } else {
            console.log('Archivo escrito correctamente');
        }
    });
};

//Crear un registro de libros
const libros = [{
    nombre: "The Left Hand of Darkness", 
    autor: "Ursula K. Le Guin", 
    rating: 100, 
    fecha: 1969, 
    imagen: '<img scr="./img/lefthandofdaarkness.webp"/>'
    },
    {
    nombre: "I Have No Mouth, and I Must Scream", 
    autor: "Harlan Ellison", 
    rsting: 90, 
    fecha: 1967,
    imagen: '<img scr="img\iHaveNoMouthAndIMustScream.jpg/">'
    }, 
    {
    nombre: "LAPVONA", 
    autor: "Ottesa Moshfegh", 
    rating: 90, 
    fecha: 2022,
    imagen: '<img scr="./img/lapvona.jpg"/>'
    },
    {
    nombre: "La Muerte de Ivan Ilich", 
    autor: "Leon Tolstoi", 
    rating: 80, 
    fecha: 1886,
    imagen: '<img scr="./img/lamuertedeivanilich.jpg"/>'
    }
];

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url);

    if(request.url == "/"){
        response.write(html_header);
        response.write(`<!doctype html>
        <html>
          <script src="https://cdn.tailwindcss.com"></script>
          <head>
            <title>Lab 10</title>
          </head>
          
          <body>
            <h1 class="flex justify-center text-red-950 italic text-3xl py-3 hover:text-red-400 hover:text-4xl ">Libros</h1>
            <ul>
              <li class="py-3 px-5 bg-slate-200 text-white-400 ring-2 ring-black "> 
              <div>
              ${libros[0].clase}
              <br></br>
              ${libros[0].imagen}
              </div>
              </li>
              <li class="py-3 px-5 bg-slate-200 text-white-400 ring-2 ring-black">
              <div>
              ${libros[1].clase}
              <br></br>
              ${libros[1].imagen}
              </div>
              </li>
              <li class="py-3 px-5 bg-slate-200 text-white-400 ring-2 ring-black">
              <div>
              ${libros[2].clase}
              <br></br>
              ${libros[2].imagen}
              </div>
              </li>
              <li class="py-3 px-5 bg-slate-200 text-white-400 ring-2 ring-black">
              <div>
              ${libros[3].clase}
              <br></br>
              ${libros[3].imagen}
              </div>
              </li>
              </ul>
          </body>
        </html>`);
        response.end();
    } else if (request.url == "/Add") {
        response.write(html_header);
        response.write(
        `<html>
          <script src="https://cdn.tailwindcss.com"></script>
          <head>
            <title>Nuevo Libro</title>
            <h1 class="flex justify-center text-red-950 italic text-3xl py-3 hover:text-red-400 hover:text-4xl ">Nuevo Libro</h1>
            </head>
        `);
        response.write(`
        <form action="/crear" method="POST" class="">
          <label class="label" for="nombre">Nombre</label>
          <input type="text" class="input text" id="nombre" name="nombre">
          <label class="label" for="autor">Autor</label>
          <input type="text" type="number" value="10" class="input text" id="autor" name="autor">
          <label class="label" for="rating">Rating</label>
          <input type="text" type="number" value="10" class="input text" id="rating" name="rating">
          <label class="label" for="fecha">Fecha</label>
          <input type="text" class="input text" id="fecha" name="fecha">
          <label class="label" for="imagen">Imagen</label>
          <input type="text" class="input text" id="imagen" name="imagen">
          <br><br>
          <input class="button is-success" type="submit" value="Crear">
        </form>`);
        response.end();
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running...');
});