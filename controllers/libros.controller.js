const { request } = require('express');
const Libro = require('../models/libros.model');

exports.get_root = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultimo_libro || '');
    Libro.fetchAll().then(([rows, fieldData]) => { //Preguntar al profe
        response.render('clases', {
            libros: rows,
            ultimo_libro: request.cookies.ultimo_libro || '',
            username: request.session.username || '',
            permisos: request.session.permisos || [],
            csrfToken: request.csrfToken(),
        });
    })
    .catch((error) => {
        console.log(error);
    });
    console.log(request.session.username || 'hola');
};

exports.get_crear = (request, response, next) => {
    console.log('hola');
    response.render('crear', {
        username: request.session.username || '',
        registro: true,
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
        editar: false,
    });
};

exports.post_crear = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const mis_libros = new Libro (
        request.body.nombre,
        request.body.autor,
        request.body.rating,
        request.body.fecha,
        request.file.filename
    );
    mis_libros.save()
         .then(([rows, fieldData]) => {
             response.setHeader('Set-Cookie', 'ultimo_libro='+ mis_libros.nombre + '; HttpOnly');
             response.redirect('/libro');
         })
        .catch((error) => {
            console.log(error);
        });
};

exports.get_editar = (request, response, next) => {
    Libro.fetchOne(request.params.id)
    .then(([rows, fieldData]) => {
        response.render('crear', {
            username: request.session.username || '',
            csrfToken: request.csrfToken(),
            permisos: request.session.permisos || [],
            editar: true,
            libro: libros[0],
        });
    })
    .catch((error) => {
        console.log(error);
    });
};

exports.post_editar = (request, response, next) => {
    Libro.update(request.body.nombre, request.body.autor, request.body.rating, request.body.fecha, request.body.id)
    .then(([rows, fieldData]) => {
        response.redirect('/libro');
    })
    .catch((error) => {
        console.log(error);
    });
}

exports.get_buscar = (request, response, next) => {
    Libro.search(request.params.valor_busqueda || '')
    .then(([libros, fieldData]) => {
        return response.status(200).json({libros: libros});
    })
    .catch((error) => {
        console.log(error);
    });
}

exports.post_eliminar = (request, response, next) => {
    Libro.delete(request.body.id)
    .then(() => {
        return Libro.fetchAll();

    }).then(([libros, fieldData]) => {
        return response.status(200).json({libros: libros});
    }).catch((error) => {
        console.log(error);
    });
}