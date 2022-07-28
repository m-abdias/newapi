const db = require('../index.js')

class StudentRepository {
  async findAll() {
    // criar o método de consulta do banco de dados
    const connection = await db.connectToMySql()
    const query = 'SELECT * FROM aluno'
    const [alunos] = await connection.query(query)

    return alunos
  }

  async findById(ra) {
    const connection = await db.connectToMySql()
    const query = 'SELECT * FROM aluno WHERE ra = ?'
    const [aluno] = await connection.query(query, [ra])

    return aluno
  }

  async create(alunoData) {
    const connection = await db.connectToMySql()
    const query =
      'INSERT INTO aluno(ra, nome, data_nascimento) VALUES (?, ?, ?)'
    const [aluno] = await connection.query(query, [
      alunoData.ra,
      alunoData.nome,
      new Date(alunoData.data_nascimento)
    ])

    return aluno
  }

  async update(ra, alunoData) {
    const connection = await db.connectToMySql()
    const query = 'UPDATE aluno SET nome = ?, data_nascimento = ? WHERE ra = ?'
    const [aluno] = await connection.query(query, [
      alunoData.nome,
      new Date(alunoData.data_nascimento),
      ra
    ])

    return aluno
  }

  async delete(ra) {
    const connection = await db.connectToMySql()
    const query = 'DELETE FROM aluno WHERE ra = ?'
    await connection.query(query, [ra])
  }
}

module.exports = StudentRepository
