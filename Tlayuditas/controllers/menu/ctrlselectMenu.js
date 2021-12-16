const { selectmenu } = require("../../services/menu/selectmenu")

async function ctrlSelectmenu(req, res){
try{
     const { precio } = req.query
     const menu = await selectmenu(precio)
     return res.status(200).send(menu )
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}

}
module.exports = { ctrlSelectmenu}
