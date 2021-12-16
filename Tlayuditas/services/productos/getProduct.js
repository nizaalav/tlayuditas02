const product= require('../../models/productos');

async function getmenu(id_producto) {
     try {
              return  await product.findOne({_id: id_producto})
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { getmenu };
