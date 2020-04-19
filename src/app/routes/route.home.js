const homePage = require("../controllers/controller.home")

const express = require('express')
const router = express.Router()

router.route('/')
  .get(homePage.index)

router.route('/article')
  .get(homePage.article)

router.route('/game')
  .get(homePage.game)
  
module.exports = router