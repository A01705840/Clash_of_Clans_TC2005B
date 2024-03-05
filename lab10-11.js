filesystem = require('fs');

//Una función que recibi un arreglo de números y devuelvaso el promedio
const arreglo_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num_prom = 0;

const promedio = (arreglo_1, num_prom) => {
    for (let item of arreglo_1){
        num_prom += item;
    }
    num_prom = num_prom / arreglo_1.length;
    console.log(num_prom);
}

promedio(arreglo_1,num_prom);

//Una función que reciba un string y escriba un string en un archivo de texto
const escribir = (texto, nombreArchivo) => {
    if (!nombreArchivo) {
        nombreArchivo = 'archivotexto.txt';
    }
    filesystem.writeFile(nombreArchivo, texto, (error) => {
        if (error) {
            console.log('Error al escribir el archivo');
        } else {
            console.log('Archivo escrito correctamente');
        }
    });
};


const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var cookieParser = require('cookie-parser');

app.use(cookieParser());

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//RUTAS
const rutasUsuarios = require('./routes/user.routes');
app.use('/users', rutasUsuarios);

const rutasClases = require('./routes/clases.routes');
//Construir pagina principal de libros
app.use('/', rutasClases);



app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, 'public/views', '404.html')); //Manda la respuesta
});

app.listen(3000);