const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')

// Endponint apontando pro controlador de estudante
router.get('/', studentController.get)
router.get('/:id', studentController.getById)
router.post('/', studentController.post)
router.put('/:id', studentController.put)
router.delete('/:id', studentController.delete)

module.exports = router
