const express = require('express');
const router = express.Router();

const librosController = require('../controllers/libros.controller');


//Página nuevo libro cargar página
router.get('/Add', librosController.get_crear);

//Página nuevo libro mandar formulario
router.post('/Add', librosController.post_crear);

//Página Principal
router.get('/', librosController.get_root);

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