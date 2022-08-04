const { Schema, model } = require("mongoose");
const { eventSchema } = require("./Event");
const deductionContentSchema = require("./DeductionContent");

const codeSchema = new Schema({
  eventTypes: [eventSchema],
  category: {
    type: String,
    required: true,
  },
  techniqueName: {
    type: String,
  },
  techniqueDescription: {
    type: String,
  },
  deductionContent: [deductionContentSchema],
  code: {
    type: String,
  },
});

const Code = model("code", codeSchema);

module.exports = Code;
