const Libro = require('../models/libros.model');

exports.get_crear = (request, response, next) => {
    response.render('crear');
};

exports.post_crear = (request, response, next) => {
    console.log(request.body);
     const mis_libros = new Libro (
         request.body.nombre,
         request.body.autor,
         request.body.rating,
         request.body.fecha,
         request.body.imagen
     );
     mis_libros.save();
     response.redirect('/');
};

exports.get_root = (request, response, next) => {
    response.render('clases', {libros: Libro.fetchAll(),});
};