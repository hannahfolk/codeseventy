const { Schema } = require('mongoose');

const deductionContentSchema = new Schema(
  {
    deductionContent: {
      type: String,
      required: true,
    },
  },
);

module.exports = deductionContentSchema;
