const { Event } = require("../models");

const getEvents = async (req, res) => {
  const events = await Event.find({ code: "01" });
  res.json(events);
};

const createEvent = async (req, res) => {
  console.log(req.body)
  const response = await Event.create(req.body);
  res.json(response);
};

module.exports = {
  getEvents,
  createEvent,
};
