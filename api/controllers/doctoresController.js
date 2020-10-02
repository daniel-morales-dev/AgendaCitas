const doctorModel = require("../models/doctorModel");
const jwt = require('jsonwebtoken');
const doctoresController = {};
const secretKey = '1234'
doctoresController.getDoctor = async (req, res, next) => {
    try {
        const doctor = await doctorModel.findById(req.body.id);
        if (!doctor) {
            return res.status(409).json({
                status: 'Error',
                message: 'El doctor no esta registrado'
            })
        }
        return res.status(200).json(doctor)
    } catch (error) {
        next(error)
    }
}
doctoresController.registrarDoctor = async (req, res, next) => {
    try {
        const data = {
            cedula: req.body.cedula,
            nombre: req.body.nombre,
        }
        const doctorExiste = await doctorModel.findOne({
            cedula: data.cedula
        })
        if (doctorExiste) {
            return res.status(409).json({
                status: 'Error',
                message: 'El doctor ya esta registrado'
            })
        }
        const nuevoDoctor = new doctorModel(data);
        const dataToLocalStorage = {
            id: nuevoDoctor._id,
            cedula: nuevoDoctor.cedula,
            nombre: nuevoDoctor.nombre
        }
        await nuevoDoctor.save();
        const token = jwt.sign(dataToLocalStorage, secretKey);
        return res.status(200).json({
            status: 'Success',
            message: 'Registro exitoso',
            token,
        });
    } catch (error) {
        next(error)
    }
}
doctoresController.loginDoctor = async (req, res, next) => {
    try {
        console.log(req.body.cedula)
        const doctor = await doctorModel.findOne(
            {cedula:req.body.cedula}
        );
        if (!doctor) {
            return res.status(409).json({
                status: 'Error',
                mensaje: 'El doctor no existe, comunicate con el administrador',
            });
        }
        const datosToLocalStorage = {
            id: doctor._id,
            cedula: doctor.cedula,
            nombre: doctor.nombre,
        }
        const token = jwt.sign(datosToLocalStorage, secretKey);
        return res.status(200).json({
            datosToLocalStorage,
            token
        })
    } catch (error) {
        next(error)
    }
}
module.exports = doctoresController;