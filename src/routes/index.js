const express = require("express");
const router = express.Router();

// retorno da rota apenas um Status 200 - Com informação do texto: "Startse - Tech Academy - Módulo XI - Banco de Dados"
router.get("/", function (req, res, next) {
  res.status(200).send("Startse - Tech Academy - Módulo XI - Banco de Dados");
});



module.exports = router;
