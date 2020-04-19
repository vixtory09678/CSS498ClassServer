const express = require('express')
const bodyParser = require('body-parser')
const path =require('path')
const createError = require('http-errors')

const loginRoute = require('../app/routes/route.login')
const homeRoute = require('../app/routes/route.home')
const moment = require('moment')

const app = express()

// console.log(path.join(__dirname, '../../public'))
app.set('views', path.join(__dirname, '../app/views'))
app.set('view engine', 'ejs')
app.set('view options', {delimiter: '?'});

// config body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // parse application/json
app.use(express.static(path.join(__dirname, '../../public')))

// router hear
app.use('/', express.Router().get('/', (req, res) => { res.send('roboticsza web')}))
app.use('/login', loginRoute)
app.use('/ab86a1e1ef70dff97959067b723c5c24', homeRoute)


// error handling
app.use((req, res, next) => {
  console.log('==> request ' + req.method + ' ' + req.path + ' ' + moment().format('YYYY-MM-DD HH:mm:ss'))
  var err = createError(404)
  next(err)
})

app.use((err, req, res, next) => {
  console.log('==> incoming')
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500) // ถ้ามี status หรือถ้าไม่มีใช้เป็น 500
  res.render('error') 
})

module.exports = app


