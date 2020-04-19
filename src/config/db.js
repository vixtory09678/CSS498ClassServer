const appConfig = require('./appconfig')
const mongoClient = require('mongodb').MongoClient

module.exports = new Promise((resolve, reject) => {
  mongoClient.connect(appConfig.db_url, { userNewUrlParser: true }, (err, client) => {
    if (err) throw err
    var db = client.db(appConfig.db_name)
    console.log('Connected database server successfully')
    resolve(db)
  })
})