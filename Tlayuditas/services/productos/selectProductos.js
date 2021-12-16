const productos = require('../../models/productos');

async function selectProduct(precio) {
     try {
          const users = !precio
               ? await productos.find()
               : await productos.find({ precio }, 'name lastname');
          return users;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { selectProduct };

