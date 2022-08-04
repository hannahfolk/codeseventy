const router = require("express").Router();
const {
  getCodes,
} = require("../../controllers/code-controller");

// /api/codes
router.route("/").get(getCodes)

module.exports = router;
