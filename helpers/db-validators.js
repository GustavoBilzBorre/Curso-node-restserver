const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

const existeEmail = async(correo) => {
    const existe = await Usuario.findOne({ correo });
    if (existe) {
        throw new Error(`El email ${correo} ya está registrado`);
    }
}

const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El ID ${id} no existe`);
    }
}

module.exports = { esRolValido, existeEmail, existeUsuarioPorId };