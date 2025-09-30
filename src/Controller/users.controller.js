const User = require("../modules/users.model");

exports.findAll = (req, res) => {
    const data = User.findAll();
    res.status(200).json(data);
}

exports.findById = (req, res) => {
    const data = User.findById(req.params.id); // path params

    return data ? res.status(200).json(data) : res.status(404).json({message: "Usuario NO encontrado"})
}

exports.addUser = (req, res) => {
    const newUser = User.addUser(req.body);

    return newUser ? res.status(201).json(newUser) : res.status(400).json({message: "Error al Registrar Usuario"});
}

exports.updateUser = (req, res) => {
    const updateUser = User.updateUser(req.params.id, req.body);

    return updateUser ? res.status(200).json(updateUser) : res.status(404).json({message: "Error al Actualizar usuario"})
}