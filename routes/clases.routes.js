const express = require('express');

const router = express.Router();

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

//Página nuevo libro cargar página
router.get('/Add', (request, response, next) => {
    /*let html = html_header;
    html +=
        `
        <script src="https://cdn.tailwindcss.com"></script>
          <head>
            <title>Nuevo Libro</title>
            <h1 class="flex justify-center text-red-950 italic text-3xl py-3 hover:text-red-400 hover:text-4xl ">Nuevo Libro</h1>
        </head>
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
        </form>`;
    html += html_footer;
    response.send(html);*/
    response.render('crear');
});

//Página nuevo libro mandar formulario
router.post('/Add', (request, response, next) => {
    console.log(request.body);
    libros.push({
        nombre: request.body.nombre,
        autor: request.body.autor,
        rating: request.body.rating,
        fecha: request.body.fecha,
        imagen: request.body.imagen
    });
    response.redirect('/');
});

//Página Principal
router.get('/', (request, response, next) => {
    response.render('clases', {
        libros: libros
    });
});

//Exportar módulos
module.exports = router;

//¿Qué otros templating engines existen para node?
/*Algunos de los más populares son:
- EJS
- Pug
- Handlebars
- Mustache
- Nunjucks
*/