const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pedidosSchema = new Schema({

     name: 'String',
     fecha: Date,
     lastname: { type: String, default: '' },
     address: { type: String,lowercase: true, trim: true, default: 'coatzacoalcos' },
     phone: { type: Number, default: '' },
     precio: {type: Number, default: ' 75 , costo , comida'},
     email: {require: true, type: String, lowercase:true, trim: true, unique:true}

},{
     timestamps: true
})

const pedidos = mongoose.model('Pedidos', pedidosSchema)
module.exports = pedidos
