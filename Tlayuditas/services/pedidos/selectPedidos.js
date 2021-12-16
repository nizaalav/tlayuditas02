const pedidos = require('../../models/pedidos');

async function selectpedidos(precio) {
     try {
          /*let users
     if (!precio){
        users =   await user.find()
     }
     else{
          users =  await user.find({precio})
     }*/
          const users = !precio
               ? await pedidos.find()
               : await pedidos.find({ precio }, 'name lastname');
          return users;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { selectpedidos };
