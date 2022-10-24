const AdminModel = require("../Models/adminModel");
const UserModel = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = process.env.SECRET_KEY
const controllerError = require("../utils/controllerError");
const Cryptr = require("cryptr");
const cryptr = new Cryptr(key);

module.exports.registrerAdmin = async(req, res, next) => { 
    try {
        const {  email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const admin = new AdminModel({
          email,
          password: hash,
        });
    
        admin
          .save()
          .then((userData) => {
            res.status(201).json({
              userData,
            });
          })
          .catch((err) => {
            controllerError(err, res, "Error occurred");
          });
    }catch (error) {
        controllerError(error, res, "Error occurred");
    }
};
//=====================
module.exports.login__controller = async (req, res, next) => {
  try {
    console.log(req.body)
    const { email, password } = req.body;

    const userInfo = await (await UserModel.findOne({ email }));

    if (!userInfo) {
      return res.status(401).json({
        errors: { userExist: "User not exist Please register and then login again" },
      });
    }
    const check= cryptr.decrypt(userInfo.password);
    if(check==password){
      const token = jwt.sign({ _id: userInfo._id,name: userInfo.userName,email: userInfo.email,role: userInfo.role }, key);
      res.status(200).json({
        token,
        userInfo,
      });

    }else{
      return res.status(401).json({
        errors: { userExist: "Password is incorrect" },
      });
    }

  } catch (error) {
    controllerError(error, res, "Error occurred");
  }
};