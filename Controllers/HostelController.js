const HostelModel = require('../Models/HostelModel');
const controllerError = require('../utils/controllerError');
const cloudinary = require('../Middlewares/Cloudinary');
module.exports.addHostel = async (req, res, next) => {
    try {
        const { name, location, description, price, image } = req.body;
      //  const pic=await cloudinary.uploader.upload(req.file.path)
        const hostel = new HostelModel({
            name,
            location,
            description,
            price,
            image
        });

        hostel
            .save()
            .then((hostelData) => {
                res.status(201).json({
                    hostelData
                });
            })
            .catch((err) => {
                controllerError(err, res, 'Error occurred');
            });
    } catch (error) {
        controllerError(error, res, 'Error occurred');
    }
};
//get hostels
module.exports.getHostels = async (req, res, next) => {
    try {
        const hostels = await HostelModel.find();
        return res.status(200).json({
            hostels
        });
    } catch (error) {
        controllerError(error, res, 'Error occurred');
    }
};