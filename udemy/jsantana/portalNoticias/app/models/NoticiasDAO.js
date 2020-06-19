function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY DATA_CRIACAO DESC ', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
	console.log(id_noticia.id_noticia)
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = '+ id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('SELECT * FROM NOTICIAS ORDER BY DATA_CRIACAO DESC LIMIT 5', callback);
}

module.exports = function(){
    return NoticiasDAO;
}