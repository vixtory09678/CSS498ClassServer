exports.loginPage = (req, res) => {
  res.locals.login_message = ""
  res.render('login', {title: 'Login Page'})
}

exports.loginAccess = ( req, res) => {
  console.log(req.body)
  if (req.body.user == "robot" && req.body.password == "fuckyouall") {
    res.redirect('/ab86a1e1ef70dff97959067b723c5c24')
    return
  }
  res.status(401).send('cannot access')
}