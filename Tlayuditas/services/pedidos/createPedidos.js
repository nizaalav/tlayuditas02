const pedidos = require('../../models/pedidos');

async function createpedidos({ name, fecha, precio, email , cantidad }) {
     try {
          const pedidosCreated = await pedidos.create({
               name,
               fecha,
               precio,
               email,
               cantidad,
          });
          return pedidosCreated;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { createpedidos };

