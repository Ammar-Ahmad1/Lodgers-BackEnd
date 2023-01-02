const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HostelSchema = new Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    image: String,
    name: String,
    description: String,
    price: Number,
    // rooms: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Room'
    // }],
    addedOn: {type: Date, default: Date.now},
    location: String,
    ratings: {type: Number, default: null},
    totalRooms: Number,
    //roomsMap: {type: Map, of: String, required: true}
})

module.exports = new mongoose.model('Hostel', HostelSchema)