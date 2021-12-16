const menu = require('../../models/menu');

async function getmenu(id_producto) {
     try {
              return  await menu.findOne({_id: id_producto})
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { getmenu };
