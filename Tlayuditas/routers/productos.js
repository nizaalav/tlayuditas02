const express = require('express')
const passport = require('passport')
const routers = express.Router()
const {ctrlSelectProduct} = require('../controllers/productos/ctrlselectproductos')
const {ctrlUpdateProduct} = require('../controllers/productos/ctrlUpdateproductos')
const {ctrlCreateProduct} = require('../controllers/productos/ctrlCreateproductos')
const { ctrlDeleteProduct} = require('../controllers/productos/ctrlDeleteproductos')

routers.get('/',
passport.authenticate('jwt', {session: false}),
ctrlSelectProduct
)

routers.post('/',
passport.authenticate('jwt', {session: false}),
ctrlCreateProduct
)

routers.put('/:email',
passport.authenticate('jwt', {session: false}),
ctrlUpdateProduct
)

routers.delete('/:email',
passport.authenticate('jwt', {session: false}),
ctrlDeleteProduct
)


module.exports = routers
