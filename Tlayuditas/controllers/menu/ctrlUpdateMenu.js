const { updatemenu } = require("../../services/menu/updatemenu")

async function ctrlUpdatemenu(req, res){
try{
     const {  name, precio, descripcion, cantidad } = req.body
     const { _id } = req.params;
     const menu = await updatemenu({ name, precio, descripcion, cantidad,_id})
     return res.status(200).send(menu)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
module.exports = { ctrlUpdatemenu}
