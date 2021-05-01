const bcrypt = require('bcrypt')

const express = require('express')

const sessions = express.Router()

const User = require('../models/users.js')

sessions.get('/new', (req, res)=>{
  res.render('sessions/new.ejs', {
    // currentUser: req.sessions.currentUser
  })
})

sessions.post('/', (req,res)=>{
  User.findOne({username: req.body.username}, (err, user)=>{
    if (err) {
      console.log(err)
    } else if (!user) {
      res.send('<a href="/">Sorry no user found </a>')
    }else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        req.session.currentUser = user
        res.redirect('/')
      } else {
        res.send('<a href="/"> password does not match </a>')
      }
    }
  })
})

sessions.delete('/', (req,res)=>{
  req.session.destroy(()=>{
    res.redirect('/')
  })
})

module.exports = sessions
