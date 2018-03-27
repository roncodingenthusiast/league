var mysql = require('mysql');
var db_user = process.env.DB_USER || 'web';
var db_pass = process.env.DB_PASS || 'web';
var db_host = process.env.DB_HOST || 'localhost';
var db_name = process.env.DB_NAME || 'pro_league_manager';
var db_port = process.env.DB_PORT || 3306;
var conn = mysql.createPool({
	host : db_host,
	user : db_user,
	password : db_pass,
	database : db_name,
	port : db_port
});

module.exports = {
	conn: conn
};