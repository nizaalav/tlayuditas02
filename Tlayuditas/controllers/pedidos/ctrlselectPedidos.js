const { selectpedidos } = require("../../services/pedidos/selectpedidos")

async function ctrlSelectpedidos(req, res){
try{
     const { precio } = req.query
     const pedidos = await selectpedidos(precio)
     return res.status(200).send(pedidos)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlSelectpedidos}
