// importa o mysql2 (yarn add mysql2)
const mysql2 = require('mysql2/promise')

// cria um método para fazer a conexão com o banco de dados
const connectToMySql = async () => {
  if (global.connection && global.connection.state !== 'disconected')
    return global.connection

  const config = {
    host: 'localhost',
    user: 'root',
    password: '45687923',
    database: 'tech_academy_university'
  }

  const connection = await mysql2.createConnection(config)
  console.log('Conexão realizada com sucesso')
  global.connection = connection
}

connectToMySql()

module.exports = { connectToMySql }
