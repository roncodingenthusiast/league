var mysql = require('mysql');
var db_user = process.env.DB_USER || 'root';
var db_pass = process.env.DB_PASS || 'root';
var db_host = process.env.DB_HOST || 'localhost';
var db_name = process.env.DB_NAME || 'league_manager_pro';
var db_port = process.env.DB_PORT || 7777;
var conn = mysql.createPool({
	host : db_host,
	user : db_user,
	password : db_pass,
	database : db_name,
	port : db_port
});

module.exports = {
	conn: conn
}