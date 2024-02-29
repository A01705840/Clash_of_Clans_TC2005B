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
                    <a href="/" class=" text-slate-900 hover:bg-purple-500 hover:shadow-md py-4 px-3 rounded-sm">Home</a>
                    <a href="/Add" class=" text-slate-900 hover:bg-purple-500 hover:shadow-md py-4 px-3 rounded-sm">Add</a>
                    <a href="#" class=" text-slate-900 hover:bg-purple-500 hover:shadow-md py-4 px-3 rounded-sm">Services</a>
                    <a href="#" class=" text-slate-900 hover:bg-purple-500 hover:shadow-md py-4 px-3 rounded-sm">Contact</a>
                </div>
            </div>
        </nav>

    </body>
    </html>`;
const html_footer =
    `<footer class="bg-purple-300 p-4"></footer>`;
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
    imagen: 'https://i.pinimg.com/564x/ae/8a/22/ae8a22093f108e52c1309e430edc3b67.jpg'
    },
    {
    nombre: "I Have No Mouth, and I Must Scream", 
    autor: "Harlan Ellison", 
    rsting: 90, 
    fecha: 1967,
    imagen: 'https://i.pinimg.com/564x/01/7f/3d/017f3d4c4ee8ead03008a31dbdc71cbe.jpg'
    }, 
    {
    nombre: "LAPVONA", 
    autor: "Ottesa Moshfegh", 
    rating: 90, 
    fecha: 2022,
    imagen: 'https://i.pinimg.com/564x/dc/2a/ef/dc2aef8de25e302f09f6f43157c5f441.jpg'
    },
    {
    nombre: "La Muerte de Ivan Ilich", 
    autor: "Leon Tolstoi", 
    rating: 80, 
    fecha: 1886,
    imagen: 'https://i.pinimg.com/564x/62/d8/b1/62d8b1eeed930d7336965b5ad66cf898.jpg'
    }
];

const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
  });
  app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
  });
/*
const server = http.createServer( (request, response) => {
    console.log(request.url);

    if(request.url == "/"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        let html_libros = '';
        // Aqui se imprimer los libros
        for (let libro of libros) {
            html_libros += `<html>
            <script src="https://cdn.tailwindcss.com"></script>
            <head>
              <meta charset="utf-8">
              <title>Lab 10</title>
            </head>
            
            <body>
              <h1 class="flex justify-center text-red-950 italic text-3xl py-3 hover:text-red-400 hover:text-4xl ">Libros</h1>
              <ul  class="flex justify-center">
                <li class="py-3 px-5 bg-slate-200 text-white-400 ring-2 ring-black justify-center"> 
                <div>
                ${libro.nombre}
                <br></br>
                <img src="${libro.imagen}" alt="The Left Hand of Darkness" class=" w-fit h-fit">
                </div>
                </li>
                </ul>
            </body>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
          </html>`;
        }
        response.write(html_libros);
        response.end();
    } else if (request.url == "/Add" && request.method == "GET") {
        response.setHeader('Content-Type', 'text/html');
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
        <meta charset="utf-8">
        <form action="/Add" method="POST" class="flex flex-col px-10">
          <label class="text-black bg-gray-500 rounded-lg font-montserrat px-10 py-4" for="nombre">Nombre</label>
          <input type="text" class="" id="nombre" name="nombre">
          <br><br>
          <label class="text-black bg-gray-500 rounded-lg font-montserrat px-10 py-4" for="autor">Autor</label>
          <input type="text" class="" id="autor" name="autor">
          <br><br>
          <label class="text-black bg-gray-500 rounded-lg font-montserrat px-10 py-4" for="rating">Rating</label>
          <input type="text" type="number" value="0000" class="" id="rating" name="rating">
          <br><br>
          <label class="text-black bg-gray-500 rounded-lg font-montserrat px-10 py-4" for="fecha">Fecha</label>
          <input type="text" class="" id="fecha" name="fecha">
          <br><br>
          <label class="text-black bg-gray-500 rounded-lg font-montserrat px-10 py-4" for="imagen">Imagen</label>
          <input type="text" class="" id="imagen" name="imagen">
          <br><br>
          <input class="ring-3 rounded-md bg-purple-700 text-white" type="submit" value="Crear" href="/">
        </form>`);
        response.write(html_footer);
        response.end();

    } else if (request.url == "/Add" && request.method == "POST") {
        const datos = [];
        
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nombre = datos_completos.split('&')[0].split('=')[1];
            console.log(nombre);
            const autor = datos_completos.split('&')[1].split('=')[1];
            console.log(autor);
            const rating = datos_completos.split('&')[2].split('=')[1];
            console.log(rating);
            const fecha = datos_completos.split('&')[3].split('=')[1];
            console.log(fecha);
            let imagen = datos_completos.split('&')[4].split('=')[1];
            imagen = decodeURIComponent(imagen);


            console.log(imagen);
            libros.push({
                nombre: nombre, 
                autor: autor,  
                rating: rating, 
                fecha: fecha,
                imagen: imagen,
            });
            return response.end();
        });
    }
});
*/
app.listen(3000, '127.0.0.1', () => {
    console.log('Server running...');
});