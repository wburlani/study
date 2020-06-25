module.exports = function(application){


	/* rota de teste error 500 da aplicação*/
	application.get('/error', function(req, res){
		res.send(x, y, z)


	});

	application.get('/', function(req, res){

		res.format({
			html: function() {
				res.send('Bem vindo a sua app NodeJS!');
			},
			json: function() {
				var retorno = {
					body: 'Bem vindo a sua app NodeJS!'
				}
				res.json(retorno);
				
			}
		});

		
	});

	application.post('/', function(req, res){
		var dados = req.body;
		res.send(dados);
	});
}