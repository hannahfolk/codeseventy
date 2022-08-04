const router = require("express").Router();
const {
  getEvents,
  createEvent,
} = require("../../controllers/event-controller");

// /api/events
router.route("/").get(getEvents).post(createEvent);

module.exports = router;
