const { Code } = require("../models");

const getCodes = async (req, res) => {
  const codes = await Code.find({ code: "01" });
  res.json(codes);
};

module.exports = {
  getCodes,
};
