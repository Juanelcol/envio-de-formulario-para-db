const Sequelize =  require('sequelize');
const dbConn = new Sequelize('usuarios', 'root', 'c4qwp2', {
    host: 'localhost',
    dialect: 'mysql'

});

dbConn.authenticate().then(function(){
    console.log('conexão realizada com sucesso')
}).catch(function(err){
    console.error('Erro: conexão não realizada / ' + err)
})

module.exports = {
    dbConn: dbConn,
    Sequelize: Sequelize
}
