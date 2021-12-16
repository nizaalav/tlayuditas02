const menu = require('../../models/menu')

async function updatemenu({ name, user_id, precio, descripcion, cantidad, _id}){
try {
    const userUpdated = await menu.findOneAndUpdate(
         {_id},
         { name,
          precio,
          user_id,
          descripcion,
          cantidad
     },
         {new: true}
    )
     return userUpdated
}    catch (error){
     return {message: error.message}
}
}
module.exports = {updatemenu}

