const express = require('express')
const passport = require('passport')
const router = express.Router()
const {ctrlSelectVentas} = require('../controllers/ventas/ctrlselectventas')
const {ctrlUpdateVentas} = require('../controllers/ventas/ctrlUpdateventas')
const {ctrlCreateVentas} = require('../controllers/ventas/ctrlCreateventas')
const {ctrlDeleteventas} = require('../controllers/ventas/ctrlDeleteventas')

router.get('/',
passport.authenticate('jwt', {session: false}),
ctrlSelectVentas
)

router.post('/',
passport.authenticate('jwt', {session: false}),
ctrlCreateVentas
)

router.put('/:email',
passport.authenticate('jwt', {session: false}),
ctrlUpdateVentas
)

router.delete('/:email',
passport.authenticate('jwt', {session: false}),
ctrlDeleteventas
)


module.exports = router
