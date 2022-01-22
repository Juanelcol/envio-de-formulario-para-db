const db = require('./db')

const Produtos = db.dbConn.define('produtos', {
    nome_prod: {
        type: db.Sequelize.STRING
    },
    descricao: {
        type: db.Sequelize.STRING
    },
    preco: {
        type: db.Sequelize.STRING
    }
} )

//Produtos.sync({force: true})

module.exports = Produtos