const { createpedidos } = require("../../services/pedidos/createpedidos")

async function ctrlCreatepedidos(req, res){
try{
     const { name, fecha, precio, email } = req.body
     const pedidos = await createpedidos({name, fecha, precio, email})
     return res.status(200).send(pedidos)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}

}

module.exports = { ctrlCreatepedidos }
