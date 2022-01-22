const db = require('./db')

const Usuarios = db.dbConn.define('usuarios', {
    nome_usuario: {
        type: db.Sequelize.STRING
    },
    email_usuario: {
        type: db.Sequelize.STRING
    }
} )

//Usuarios.sync({force: true})

module.exports = Usuarios