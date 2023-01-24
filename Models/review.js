const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    review: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    hostel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hostel",
    },

    
});

module.exports = mongoose.model("Review", reviewSchema);