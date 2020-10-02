const horarioModel = require('../models/horarioModel');
const horariosController={}

horariosController.getHorario=async(req,res,next)=>{
    try {
        const horarios = await horarioModel.find();
        res.status(200).json(horarios.sort())
    }catch (error) {
        next(error)
    }
}
module.exports = horariosController;