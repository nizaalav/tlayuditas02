const { deleteventas } = require("../../services/ventas/deleteventas")

async function ctrlDeleteventas(req, res){
try{
     const { _id } = req.params;
     console.log(_id, 'my id')
     const ventas = await deleteventas({_id});
     return res.status(200).send(ventas);
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
}

module.exports = { ctrlDeleteventas }

