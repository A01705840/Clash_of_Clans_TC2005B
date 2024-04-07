const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canView = require('../util/canView');
const canCreate = require('../util/canCreate');
const canEdit = require('../util/canEdit');

const librosController = require('../controllers/libros.controller');


//Página nuevo libro cargar página
router.get('/libro/add', isAuth, canCreate, librosController.get_crear);

//Página nuevo libro mandar formulario
router.post('/libro/add', isAuth, canCreate, librosController.post_crear);

router.get('/libro/editar/:id', isAuth, canEdit, librosController.get_editar);

router.post('/libro/editar/:id', isAuth, canEdit, librosController.post_editar);

router.get('/:id', isAuth, canView, librosController.get_root);
//Página Principal
router.get('/', isAuth, canView, librosController.get_root);

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

//¿Qué beneficios encuentras en el estilo MVC?
/*Los beneficios que encuentro en el estilo MVC son:
- Separación de responsabilidades
- Reutilización de código
- Facilidad para el mantenimiento
- Facilidad para la escalabilidad
- Facilidad para la colaboración
*/

//¿Encuentras alguna desventaja en el estilo arquitectónico MVC?
/*Algunas desventajas que encuentro en el estilo arquitectónico MVC son:
- Complejidad: puede ser complejo de entender para principiantes
- Dificultad para implementar: puede ser difícil implementar MVC en proyectos pequeños
- Dificultad para depurar: si algo no funciona, puede ser difícil encontrar el problema 
*/