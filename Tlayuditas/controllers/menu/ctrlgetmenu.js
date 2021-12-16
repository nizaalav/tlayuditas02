const { getmenu } = require("../../services/menu/getmenu")

async function ctrlGetmenu(req, res){
try{
     const { _id } = req.params
     const menu = await getmenu(_id)
     return res.status(200).send(menu)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}

}

module.exports = { ctrlGetmenu}
