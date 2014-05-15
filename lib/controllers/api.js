'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Rsvp = mongoose.model('Rsvp');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.getUserRsvp = function(req, res) {
    return Rsvp.findById(req.user._id,
        function (err, rsvp) {
        if (!err) {
            if(rsvp === null) {
              rsvp = new Rsvp();
            }
            return res.json(rsvp);
        } else {
            return res.send(err);
        }
    });
};

exports.createUserRsvp = function(req, res) {
  var rsvpBody = new Rsvp(req.body);
  var rsvpObject = rsvpBody.toObject();
  delete rsvpObject._id;
  Rsvp.findByIdAndUpdate(req.user._id, rsvpObject, { upsert : true },
    function(err, newRsvp) {
    if (err) { return res.json(400, err); }
    return res.json(newRsvp);
  });
};