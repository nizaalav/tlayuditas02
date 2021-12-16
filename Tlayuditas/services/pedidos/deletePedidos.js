const pedidos = require('../../models/pedidos');

async function deletepedidos({ email }) {
     try {
          const userDeleted = await pedidos.deleteOne({ email });
          if (userDeleted.deletedCount == 0)
               return {
                    userDeleted: userDeleted.deletedCount,
                    message: 'usuario no encontrado',
               };
          else
               return {
                    userDeleted: userDeleted.deletedCount,
                    message: 'Usuario eliminado',
               };
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { deletepedidos };
