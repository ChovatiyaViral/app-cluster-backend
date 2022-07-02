const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const PartyEventsSchema = new mongoose.Schema({
    poster_img: {
        type: String,
        required: true
    },
    event_name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    company_logo: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    sponsor: {
        type: Object,
        required: false
    },
    is_like: [{
        type: ObjectId,
        ref: "user"
    }]
});

module.exports = mongoose.model('PartyEvents', PartyEventsSchema);