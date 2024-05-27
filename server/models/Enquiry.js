const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
        name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique :true,
    },
    mobile :{
    type: Number,
    required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Enquiry', enquirySchema);
