const express = require('express')

const Item = require('../models/products.js')

const items =  express.Router()

const session = require('express-session')

const isAuthenticated = (req, res, next)=>{
  if (req.session.currentUser) {
return next()
} else {
  res.redirect('/sessions/new')
}
}

items.get('/new', isAuthenticated, (req, res)=>{
  res.render('items/new.ejs', {
    currentUser: req.session.currentUser
  })
})

items.get('/:id/edit', isAuthenticated, (req, res)=>{
  Item.findById(req.params.id, (err, items)=>{
    res.render('items/edit.ejs', {
      items: items,
      currentUser: req.session.currentUser
    })
  })
})

  items.delete('/:id', (req, res)=>{
    Item.findByIdAndRemove(req.params.id, (err,deleted)=>{
      res.redirect('/storeuritems')
    })
  })

  items.get('/:id', isAuthenticated, (req, res) => {
    if (req.session.currentUser) {
      Item.findById(req.params.id, (error, items) => {
        res.render('items/show.ejs', {
          items: items
          ,  currentUser: req.session.currentUser
        })
      })
    } else {
      res.redirect('/sessions/new')
    }

  })

items.put('/:id', (req, res)=>{
  Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, items)=>{
    res.redirect('/storeuritems')
  })
})

items.post('/',isAuthenticated, (req, res)=>{
  console.log(req.body, "this req.body")

  Item.create(req.body, (err, items)=>{
    if (err) {
      console.log(err)
    }else {
      console.log(items)
      res.redirect('/storeuritems')
    }

  })
})

items.get('/', isAuthenticated,(req,res)=>{
  Item.find({createdby:req.session.currentUser.username},(err, items)=>{
    console.log(items)
    res.render('items/index.ejs', {
      items:items,
      currentUser: req.session.currentUser
    })
  })
})

module.exports = items
