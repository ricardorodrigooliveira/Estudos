var mySql = require('mySql');

var connectMySql = function(){
    console.log('Conectado ao DB')
    var conn = mySql.createConnection({
        host: 'localhost',
        user : 'root',
        password : 'Ric@rd0',
        database : 'nac'
    });
    return conn;
}

module.exports = function(){
    console.log('O autoload do Consign carregou apenas o módulo de conexão');
    return connectMySql;
}