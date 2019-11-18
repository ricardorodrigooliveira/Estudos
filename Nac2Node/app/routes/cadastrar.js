module.exports = function(app){
    app.get('/cadastrar', function(req, res){
        res.render("admin/frmCadProd");
    });

    app.post('/produtos/incluir', function(req, res){
        var fruta = req.body;

        var conn = app.config.dbConnection();

        var prodModel = app.app.models.produtosModel;

        prodModel.incluirProduto(fruta, conn, function(error, result){
            res.redirect('/frutas');
        })
    })
};