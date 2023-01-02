const HostelModel = require('../Models/HostelModel');
const controllerError = require('../utils/controllerError');
const cloudinary = require('../Middlewares/Cloudinary');
module.exports.addHostel = async (req, res, next) => {
    try {
      console.log(req.body);
        const { name, location, description, owner} = req.body;

        const pic = await cloudinary.uploader.upload(req.file.path);
       //const pic=await cloudinary.uploader.upload(image)
        const hostel = new HostelModel({
            name,
            location,
            description,
            image: pic.secure_url,
            // ratings,
            owner
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
module.exports.getHostelsByOwner = async (req, res, next) => {
    const owner = req.params.owner;
    try {
        const hostels = await HostelModel.find({owner: owner});
        return res.status(200).json({
            hostels
        });
    } catch (error) {
        controllerError(error, res, 'Error occurred');
    }
};