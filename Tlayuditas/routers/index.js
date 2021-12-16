
const express = require('express')
const menuRouters = require('./menu')
const usuarioRouters = require('./usuario')
const ventasRouters = require('./ventas')
const pedidosRouters = require('./pedidos')
const authRouters = require ('./auth')

function routerApi(app){
  app.use(express.json())
  app.use('/auth', authRouters)
  app.use('/menu', menuRouters)
  app.use('/usuario', usuarioRouters )
  app.use('/ventas', ventasRouters)
  app.use('/pedidos', pedidosRouters)
}

module.exports = routerApi
