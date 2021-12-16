const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productosSchema = new Schema({
     name: 'String',
     descripcion: {type: String},
     user_id: {
          type: mongoose.Schema.ObjectId,
          ref: 'usuarios',
          required: 'Campo id usuario es requerido'
      },
     fecha: Date,
     precio: {type: Number, default: ' 76 , costo , comida'},
},{
     timestamps: true
})

const menu = mongoose.model('productos', productosSchema)
module.exports = menu
