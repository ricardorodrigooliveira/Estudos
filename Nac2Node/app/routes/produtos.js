module.exports = function(app){
    app.get('/frutas', function(req, res){
        var conn = app.config.dbConnection();
        var prodModel = app.app.models.produtosModel;
        
        prodModel.getProdutos(conn, function(error, result){
            //res.send(result);
            res.render("produtos/frutas", {prod : result});
        });
    });
}