const menu = require('../../models/menu');

async function deletemenu({ _id }) {
     try {
          const userDeleted = await menu.deleteOne({ _id });
          if (userDeleted.deletedCount == 0)
               return {
                    userDeleted: userDeleted.deletedCount,
                    message: 'menu no encontrado',
               };
          else
               return {
                    userDeleted: userDeleted.deletedCount,
                    message: 'menu eliminado',
               };
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { deletemenu };
