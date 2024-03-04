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

exports.get_crear = (request, response, next) => {
    response.render('crear');
};

exports.post_crear = (request, response, next) => {
    console.log(request.body);
     libros.push({
         nombre: request.body.nombre,
         autor: request.body.autor,
         rating: request.body.rating,
         fecha: request.body.fecha,
         imagen: request.body.imagen
     });
     response.redirect('/');
};

exports.get_root = (request, response, next) => {
    response.render('clases', {libros: libros});
};