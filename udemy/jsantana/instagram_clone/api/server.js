var express = require('express'),
	bodyParser = require('body-parser'),
	mongodb = require('mongodb');

var app = express();

//body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = 8080;
app.listen(port);

console.log('Servidor HTTP esta escutando na porta: ' + port);

app.get('/', function (req, res) {
	var resposta = {msg:'Olá Postman'};
	res.send(resposta);
	
});