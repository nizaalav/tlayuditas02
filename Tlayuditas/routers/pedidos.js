const express = require('express')
const passport = require('passport')
const router = express.Router()
const {ctrlSelectpedidos} = require('../controllers/pedidos/ctrlselectPedidos')
const {ctrlUpdatepedidos} = require('../controllers/pedidos/ctrlUpdatePedidos')
const { ctrlCreatepedidos} = require('../controllers/pedidos/ctrlCreatePedidos')
const {ctrlDeletepedidos} = require('../controllers/pedidos/ctrlDeletePedidos')

router.get('/',
passport.authenticate('jwt', {session: false}),
ctrlSelectpedidos
)

router.post('/',
passport.authenticate('jwt', {session: false}),
ctrlCreatepedidos
)

router.put('/:email',
passport.authenticate('jwt', {session: false}),
ctrlUpdatepedidos
)

router.delete('/:email',
passport.authenticate('jwt', {session: false}),
ctrlDeletepedidos
)


module.exports = router
