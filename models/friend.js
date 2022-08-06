const mongoose = require('mongoose');
const {Schema} = mongoose;

//create friend schema and model
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
    }
    // add in geo location
});


const Friend = mongoose.model('friend', FriendSchema);

module.exports = Friend;