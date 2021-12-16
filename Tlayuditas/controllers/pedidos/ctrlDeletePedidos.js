const { deletepedidos } = require("../../services/pedidos/deletepedidos")

async function ctrlDeletepedidos(req, res){
try{
     const { name, fecha } = req.body
     const { email } = req.params
     const pedidos = await deletepedidos({name, fecha, email})
     return res.status(200).send(pedidos)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
}

module.exports = { ctrlDeletepedidos }
