const productos = require('../../models/productos');

async function createProduct({ name,precio,user_id, descripcion, }) {
     try {
          const menuCreated = await productos.create({
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
module.exports = { createProduct };
