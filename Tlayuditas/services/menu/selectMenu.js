const menu = require('../../models/menu');

async function selectmenu(precio) {
     try {
          const users = !precio
               ? await menu.find()
               : await menu.find({ precio }, 'name lastname');
          return users;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { selectmenu };

