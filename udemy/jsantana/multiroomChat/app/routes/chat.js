module.exports = function (application) {
	// body...
	application.post('/chat', function(req, res){
		application.app.controllers.chat.iniciaChat(application, req, res)
	});

	application.get('/chat', function(req, res){
		application.app.controllers.chat.iniciaChat(application, req, res)
	});
}