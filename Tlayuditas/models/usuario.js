const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({

  name: { type: String, default: 'Niza'},
  lastName: { type: String, default: 'Alavat'},
  phone: { type: String, default: '9712657084'},
  genre: {type: String, enum: ['H', 'M', 'U'], default: 'U'},
  email: {required: true, type: String, lowercase: true, trim: true, unique: true},
  location: {type: String, lowercase: true, trim: true, default: 'Coatzacoalcos, Ver.'},
  recommendation:{type: String, lowercase: true, trim: true, default: 'Muy Buenas, Sin Duda Volveria a Comerlas!'},
  password: {require: true, type: String}
},{
  timestamps: true
})

const Usuario = mongoose.model('Usuario', usuarioSchema)
module.exports = Usuario
