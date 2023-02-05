const UserModel = require('../Models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const controllerError = require('../utils/controllerError');
const key = process.env.SECRET_KEY
const Cryptr = require("cryptr");
const cryptr = new Cryptr(key);
const cloudinary = require('../Middlewares/Cloudinary');

module.exports.registerUser = async (req, res, next) => {
    try {
        const {name,email, password,role} = req.body;
        const pic = await cloudinary.uploader.upload(req.file.path);
        const hash = await cryptr.encrypt(password);
        const user = new UserModel({
            name,
            email,
            password: hash,
            role,
            image: pic.secure_url,
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
//update user
module.exports.updateUser = async (req, res, next) => {
    try {
        const { name, email, password,role } = req.body;
        const hash = await cryptr.encrypt(password);
        const user = await UserModel.findByIdAndUpdate(req.params.id, {
            name,
            email,
            password: hash,
            role,
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
            }
            );
    } catch (error) {
        controllerError(error, res, 'Error occurred');
    }
};
//get user by id
module.exports.getUserById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const user
            = await UserModel.findById
            (id);
        console.log(user);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        controllerError(error, res, 'Error occurred');
    }
};

