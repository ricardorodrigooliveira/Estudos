module.exports = function(){
    this.getProdutos = function(conn, callback){
        conn.query('SELECT * FROM frutas', conn, callback);
    }

    this.incluirProduto = function(produto, conn, callback){
        conn.query('INSERT INTO frutas set ?', produto, callback);
    }

    return this;
}