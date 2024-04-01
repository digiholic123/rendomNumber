var express = require('express')
var app = express()
const controller=require('../controller/index')


app.post('/createRandomNumber',controller.userController.createRandomNumber)





module.exports=app