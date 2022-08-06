const mongoose = require('mongoose');
const {Schema} = mongoose;

// create geolocation schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere" 
    }
});

// create friend schema and model
const FriendSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema

});


const Friend = mongoose.model('friend', FriendSchema);

module.exports = Friend;