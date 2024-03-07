const Lab = require('../models/lab.model');

exports.get_add = (request, response, next) => {
    response.render('add', {
        username: request.session.username || '',
    });
};

exports.post_add = (request, response, next) => {
    const mi_lab = new Lab (
        request.body.nombre,
        request.body.descripcion,
        request.body.fecha,
        request.body.imagen
    );
    mi_lab.save();
    response.setHeader('Set-Cookie', 'ultimo_lab='+ mi_lab.nombre + '; HttpOnly');
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    response.render('labs', {
        labs: Lab.fetchAll(),
        ultimo_lab: request.cookies.ultimo_lab || '',
        username: request.session.username || '',
    });
}