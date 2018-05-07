module.exports = {
    mysqldb: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        database: process.env.DB_NAME || 'pro_league_manager',
        password: process.env.DB_PASS || 'league',
        name: "mysqldb",
        user: process.env.DB_USER || 'league',
        connector: process.env.DB_CONNECTOR || 'mysql'
    }
};