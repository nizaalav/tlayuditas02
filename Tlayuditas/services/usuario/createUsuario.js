const Usuario = require('../../models/usuario');

async function createUsuario({ name, lastName, phone, email, password }) {
     try {
          const userCreated = await Usuario.create({
               name,
               lastName,
               phone,
               email,
               password
          });
          return userCreated;
     } catch (error) {
          return { message: error.message };
     }
}
module.exports = { createUsuario };
