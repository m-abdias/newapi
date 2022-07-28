// responsável por receber as requisições do nossso cliente, processa e devolve pro cliente uma resposta
const StudentService = require('../services/studentService')

// serviços são classes que tem por responsabilidade executar determinadas ações
exports.get = async (req, res, next) => {
  // uma chamada ao serviço de estudando, pedindo o método get para obter a lista dos estudantes
  const payload = await new StudentService().getAllStudents()
  res.status(200).send(payload)
}

exports.getById = async (req, res, next) => {
  const payload = await new StudentService().getStudentById(req.params.id)
  res.status(200).send(payload)
}

exports.post = async (req, res, next) => {
  try {
    const payload = await new StudentService().createStudent(req.body)
    res.status(201).send(payload)
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
}

exports.put = async (req, res, next) => {
  try {
    const id = req.params.id
    const body = req.body

    const oldStudent = await new StudentService().getStudentById(id)

    if (!oldStudent || oldStudent.length === 0)
      throw new Error(`Student with ID ${id} was not found`)

    const payload = await new StudentService().updateStudent(id, body)
    res.status(200).send(payload)
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
}

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id

    const oldStudent = await new StudentService().getStudentById(id)

    if (!oldStudent || oldStudent.length === 0)
      throw new Error(`Student with ID ${id} was not found`)

    const payload = await new StudentService().deleteStudent(id)
    res.status(204).send(payload)
  } catch (error) {
    res.status(404).send({
      message: error.message
    })
  }
}
