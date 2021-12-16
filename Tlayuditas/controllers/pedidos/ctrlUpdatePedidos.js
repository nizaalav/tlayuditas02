const { updatepedidos } = require("../../services/pedidos/updatepedidos")

async function ctrlUpdatepedidos(req, res){
try{
     const { name, fecha } = req.body
     const { email } = req.params
     const pedidos = await updatepedidos({name, fecha, email})
     return res.status(200).send(pedidos)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlUpdatepedidos }
