const Libro = require('../models/libros.model');

exports.get_crear = (request, response, next) => {
    response.render('crear', {
        username: request.session.username || '',
    });
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
    response.setHeader('Set-Cookie', 'ultimo_libro='+ mis_libros.nombre + '; HttpOnly');
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultimo_libro || '');
    response.render('clases', {
        libros: Libro.fetchAll(),
        ultimo_libro: request.cookies.ultimo_libro || '',
        username: request.session.username || '',
    });
};