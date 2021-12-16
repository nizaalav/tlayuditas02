const menu = require('../../models/menu');

async function createmenu({ name,precio,user_id, descripcion, }) {
     try {
          const menuCreated = await menu.create({
               name,
               precio,
               user_id,
               descripcion,
          });
          return menuCreated;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { createmenu };
