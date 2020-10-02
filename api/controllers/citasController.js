const citasModel = require("../models/citasModel");
const citasController = {};
citasController.registrarCita = async (req, res, next) => {
    try {
        console.log(req.body)
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