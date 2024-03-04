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