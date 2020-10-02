const citasModel = require("../models/citasModel");
const citasController = {};
citasController.registrarCita = async (req, res, next) => {
    try {
        const data={
            fecha:req.body.fecha,
            hora:req.body.hora,
            doctor:req.body.doctor
        };
        const citasPorHora = await citasModel.find({fecha:data.fecha,hora:data.hora});
        console.log(citasPorHora.length);
        if (citasPorHora.length===3){
            return res.status(409).json({
                status:'Error',
                mensaje:'Se cumplio con el maximo de citas para esta fecha y hora'
            })
        }
        const nuevaCita = new citasModel(data);
        await nuevaCita.save();
        return res.status(200).json({
            status:'Succes',
            message:'Se agendo la cita con exito'
        })
    } catch (error) {
        next(error)
    }
}
citasController.getCitasPorDia = async (req, res, next) => {
    try {
        console.log("xd")
    } catch (error) {
        next(error)
    }
}
module.exports = citasController;