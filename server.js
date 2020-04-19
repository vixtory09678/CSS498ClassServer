const app = require('./src/config/express')
const config = require('./src/config/appconfig')

app.listen(config.port, (err) => {
  if (err) throw err
  console.log(`start server at port ${config.port}`)
})