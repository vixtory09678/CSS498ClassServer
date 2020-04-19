const login = require("../controllers/controller.login")

const express = require('express')
const router = express.Router()

router.route('/')
  .get(login.loginPage)
  .post(login.loginAccess)
  
module.exports = router