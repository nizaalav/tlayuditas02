const express = require('express')
const passport = require('passport')
const router = express.Router()
const {ctrlSelectProduct} = require('../controllers/productos/ctrlselectproductos')
const {ctrlUpdateProduct} = require('../controllers/productos/ctrlUpdateproductos')
const {ctrlCreateProduct} = require('../controllers/productos/ctrlCreateproductos')
const {ctrlDeleteProduct} = require('../controllers/productos/ctrlDeleteproductos')

router.get('/',
passport.authenticate('jwt', {session: false}),
ctrlSelectProduct
)

router.post('/',
passport.authenticate('jwt', {session: false}),
ctrlCreateProduct
)

router.put('/:email',
passport.authenticate('jwt', {session: false}),
ctrlUpdateProduct
)

router.delete('/:email',
passport.authenticate('jwt', {session: false}),
ctrlDeleteProduct
)


module.exports = router
