const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//Middleware
const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const multer = require('multer');
//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'public/uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, Number(new Date()).toString() + file.originalname);
    },
});
app.use(multer({ storage: fileStorage }).single('imagen')); 

//Protección contra ataques de CSRF
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection);

var client_id = 'f3aea5d857a444c4ae7c3347e756d516';
var redirect_uri = 'http://localhost:3000/libro';


app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: '3Eeha8zjT4y0CdgM5Db0Kwxrr8HBrzUX',
  issuerBaseURL: 'https://dev-64y0yeby12hotdsh.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

const { requiresAuth } = require('express-openid-connect');

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
//RUTAS
const rutasUsuarios = require('./routes/user.routes');
app.use('/users', rutasUsuarios);

const rutasClases = require('./routes/clases.routes');
app.use('/libro', rutasClases);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, 'public/views', '404.html')); //Manda la respuesta
});

app.listen(3000);