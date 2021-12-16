const pedidos = require('../../models/pedidos')

async function updatePedidos({name, fecha, email}){
try {
    const userUpdated = await pedidos.findOneAndUpdate(
         {email},
         {name, fecha},
         {new: true}
    )
     return userUpdated
}    catch (error){
     return {message: error.message}
}
}
module.exports = {updatePedidos}
