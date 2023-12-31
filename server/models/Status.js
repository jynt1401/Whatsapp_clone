const mongoose = require("mongoose");
require("mongoose-type-email");

const StatusSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true,
  },
});
StatusSchema.index({createdAt: 1}, { expireAfterSeconds: 60 });
module.exports = mongoose.model("Status", StatusSchema);
