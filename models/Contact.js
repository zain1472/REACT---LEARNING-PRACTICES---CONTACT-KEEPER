const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: "personal"
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

module.exports = new mongoose.model("contact", contactSchema);
