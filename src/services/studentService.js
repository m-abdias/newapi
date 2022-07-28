const StudentRepository = require('../database/repositories/studentRepository.js')

// o serviço de estudante tem um GET que é uma listagem de estudante e esse serviço vai chamar o repository.
// repository é a camada na qual a gente vai ter a lista dos alunos (os dados)
class StudentService {
  constructor() {
    this.repository = new StudentRepository()
  }

  async getAllStudents() {
    return this.repository.findAll()
  }

  async getStudentById(ra) {
    return this.repository.findById(ra)
  }

  async createStudent(aluno) {
    return this.repository.create(aluno)
  }

  async updateStudent(ra, aluno) {
    return this.repository.update(ra, aluno)
  }

  async deleteStudent(ra) {
    return this.repository.delete(ra)
  }
}

module.exports = StudentService
