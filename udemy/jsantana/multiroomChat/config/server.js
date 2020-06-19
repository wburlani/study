/* importar modulos */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

/* iniciar obj express */
var app = express();

/* setar as variaveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* conf. middlewares */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/* efetuar autoload das rotas, models e controllers para o obj app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exportar obj express */
module.exports = app; 