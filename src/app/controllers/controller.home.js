exports.index = (req, res) => {
  res.render('home')
}

exports.article = (req, res) => {
  res.render('article')
}

exports.game = (req, res) => {
  console.log(req.query)
  res.locals.show = "" 
  if(req.query.byte1.length == 0 || req.query.byte2.length == 0) {
    res.locals.show = "fill in fields" 
  }else {
    if (req.query){
      const byte1 = req.query.byte1
      const byte2 = req.query.byte2
      if (!isNaN(byte1) && !isNaN(byte2)) {
        const number = parseInt(byte1) << 8 | parseInt(byte2)
        if (number == 15000) {
          res.locals.show = `your number <b>${number}</b> flag{29ff12a5e732465cef66878420f0fd9a}`
        }else {
          res.locals.show = `your number <b>${number}</b> unlucky`
        }
      }
    }
  }

  
  res.render('game')
  
  
}