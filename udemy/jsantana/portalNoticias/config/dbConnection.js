var mysql = require('mysql');
var connMySql = function(){
	//console.log('Conexão estabelecidade');
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'admin',
		database: 'udemy'
	});	
}
module.exports = function(){
	//console.log('o autoload do banco de dados carregou com sucesso');
	return connMySql;
}
