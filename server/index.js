const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const username_DB = '王洁'
const password_DB = '123'
const jwtSecret = '服务器的JWT密码'
const info =
{
roles: ['admin'],
introduction: 'I am a super administrator',
avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
name: 'Super Admin'
}
app.use(express.json())
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.post('/login', (req, res) => { 
  if (req.body.username === username_DB && req.body.password === password_DB) {
    const token = jwt.sign({ name: "王洁" }, jwtSecret, { algorithm: 'HS256', expiresIn: 1000 })
    return res.send({
     msg: 200,
     token: token,
    })
  } else {
    res.send({
      code: 400,
      msg:'账号或密码错误'
    })
  }
})
app.get('/user/info', (req, res) => {
  res.send({
    code: 2000,
    data:info
  })
})


app.listen(3000, () => console.log('3000 Runing....'))



