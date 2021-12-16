const { deletemenu } = require("../../services/menu/deletemenu")

async function ctrlDeletemenu(req, res){
try{
     const { _id } = req.params
     const menu = await deletemenu({_id})
     return res.status(200).send(menu)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
}

module.exports = { ctrlDeletemenu }
