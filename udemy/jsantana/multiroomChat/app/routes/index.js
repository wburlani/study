module.exports = function (application) {
	// body...
	application.get('/', function(req, res){
		application.app.controllers.index.home(application, req, res);
	})
}

