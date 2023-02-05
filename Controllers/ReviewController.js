const Review = require("../Models/review");
const controllerError = require("../utils/controllerError");

module.exports.addReview = async (req, res, next) => {

    try {
        console.log(req.body);
        const { review, user, hostel,name, email } = req.body;
        const newReview = new Review({
            review,
            user,
            hostel,
            name,
            email

        });
        newReview
            .save()
            .then((reviewData) => {
                res.status(201).json({
                    reviewData,
                });
            })
            .catch((err) => {
                controllerError(err, res, "Error occurred");
            });
    } catch (error) {
        controllerError(error, res, "Error occurred");
    }
}

//get reviews by hostel
module.exports.getReviewsByHostel = async (req, res, next) => {
    const hostel = req.params.hostel;
    try {
        const reviews = await Review.find({ hostel: hostel });
        return res.status(200).json({
            reviews,
        });
    } catch (error) {
        controllerError(error, res, "Error occurred");
    }
};

//delete review

