const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    organizers: {
        type: String,
    },

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    thumbnailUrl: {
        type: String
    },

    venue: {
        type: String,
        required: true
    },
    venueUrl: {
        type: String,
    },
    // date: {
    //     type: String,
    //     required: true
    // },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    teamSize: {
        type: Number,
        default: 1
    },
    eventType: {
        type: String,
        enum: ['event','gl','workshop','hackathon'],
        default: 'event'
    },

    rulebookUrl: {
        type: String
    },
    registrationUrl: {
        type: String
    },
    charge: {
        type: Number,
        default: 0
    },

    postLinks: [{
        type: String
    }],
}, {
    timestamps: true
});


const Event = mongoose.model("event", eventSchema);
module.exports = Event;