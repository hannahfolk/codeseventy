const router = require("express").Router();
const codeRoutes = require("./code-routes");
const eventRoutes = require("./event-routes");

router.use("/codes", codeRoutes);
router.use("/events", eventRoutes);

module.exports = router;
