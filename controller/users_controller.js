const bcrypt = require('bcrypt')

const express = require('express')

const users = express.Router()

const User = require('../models/users.js')

users.get('/new', (req,res)=>{
  res.render('users/new.ejs')
})

users.post('/', (req, res)=>{
  req.body.password = bcrypt.hashSync(req.body.password,
  bcrypt.genSaltSync(10))
  User.create(req.body, (err, usercreated)=>{
    console.log('user is created: ', usercreated)
    res.redirect('/')
  })
})

module.exports = users
