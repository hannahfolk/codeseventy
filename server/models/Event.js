const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
});

const Event = model("event", eventSchema);

module.exports = { Event, eventSchema };
