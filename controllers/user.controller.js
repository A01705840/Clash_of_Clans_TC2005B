const Usuario = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        username: request.session.username || '',
        registro: false,
        csrfToken: request.csrfToken(),
        error: error,
        permisos: request.session.permisos || [],
    });
    console.log(request.session.username || 'hola')
};

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
    .then(([usuarios, fieldData]) => {
        if (usuarios.length == 1) {
            const usuario = usuarios[0];
                bcrypt.compare(request.body.password, usuario.password)
                    .then((doMatch) => {
                        if(doMatch) {
                            Usuario.getPermisos(usuario.username)
                                .then(([permisos, fieldData]) => {
                                    console.log(permisos);
                                    request.session.permisos = permisos;
                                    request.session.username = usuario.nombre;
                                    request.session.isLoggedIn = true;
                                    response.redirect('/libro');
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        } else {
                            request.session.error = "Usuario y/o contraseña incorrectos";
                            response.redirect('/users/login');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
        } else {
            request.session.error = "Usuario y/o contraseña incorrectos";
            response.redirect('/users/login');
        }
    })
    .catch((error) => {console.log(error);});
    console.log(request.session.username || 'hola2')
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_signup = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        username: request.session.username || '',
        registro: true,
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
        error: error,
    });

};
exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new Usuario(
        request.body.username, request.body.name, request.body.password
    );
    nuevo_usuario.save()
        .then(() => {
            response.redirect('/users/login');
        })
        .catch((error) => {
            console.log(error);
            request.sesion.error = 'Nombre de usuario ya existe';
            response.redirect('/users/signup');
        });
};