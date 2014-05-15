/**
 * Created by vproman on 5/9/14.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var RsvpSchema = new Schema({
    receivedPaperInvite : {
            type: Boolean,
            default: null
    },
    returnedPaperInvite : {
            type: Boolean,
            default: null
    },
    yourName : {
        type: String,
        default: ''
    },
    yourRsvp : {
            type: Boolean,
            default: null
    },
    numberAttending : {
        type: Number,
        default: 0
    }
});

mongoose.model('Rsvp', RsvpSchema);