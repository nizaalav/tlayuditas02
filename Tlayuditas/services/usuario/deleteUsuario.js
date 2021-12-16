const Usuario = require('../../models/usuario');

async function deleteUsuario({ email }) {
     try {
          const userDeleted = await Usuario.deleteOne({ email });
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
module.exports = { deleteUsuario };
