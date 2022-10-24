const UserModel = require('../Models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const controllerError = require('../utils/controllerError');
const key = process.env.SECRET_KEY
const Cryptr = require("cryptr");
const cryptr = new Cryptr(key);
module.exports.registerUser = async (req, res, next) => {
    try {
        const {name,email, password} = req.body;
        const hash = await cryptr.encrypt(password);
        const user = new UserModel({
            email,
            password: hash,
        });

        user
            .save()
            .then((userData) => {
                res.status(201).json({
                    userData,
                });
            })
            .catch((err) => {
                controllerError(err, res, 'Error occurred');
            });
    } catch (error) {
        controllerError(error, res, 'Error occurred');
    }
};
