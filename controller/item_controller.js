const express = require('express')

const Item = require('../models/products.js')

const items =  express.Router()

const isAuthenticated = (req, res, next)=>{
  if (req.session.currentUser) {
return next()
} else {
  res.redirect('/sessions/new')
}
}

items.get('/new', (req, res)=>{
  res.render('storeuritems/new.ejs', {
    currentUser: req.session.currentUser
  })
})

items.get('/:id/edit', (req, res)=>{
  items.findById(req.params.id, (err, items)=>{
    res.render('storeuritems/edit.ejs', {
      items: items,
      currentUser: req.session.currentUser
    })
  })
})

  items.delete('/:id', (req, res)=>{
    items.findByIdAndRemove(req.params.id, (err,deleted)=>{
      res.redirect('/storeuritems')
    })
  })

items.get('/:id', isAuthenticated, (req, res)=>{
  if (req.session.currentUser) {
    items.findById('storeuritems/show.ejs', {
      items: items,
      currentUser: req.session.currentUser
    })
  } else {
    res.redirect('/sessions/new')
  }
})

items.put('/:id', (req, res)=>{
  items.findByIdAndupdate(req.params.id, req.body, {new: true}, (err, items)=>{
    res.rediret('/storeuritems')
  })
})

items.post('/',(req, res)=>{
  items.create(req.body, (err, items)=>{
    res.redirect('/storeuritems')
  })
})

items.get('/',(req,res)=>{
  itemsfind({},(err, items)=>[
    res.render('storeuritems/index.ejs', {
      items:items,
      currentUser: req.session.currentUser
    })
  ])
})

module.exports = items
