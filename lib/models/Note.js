const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100
  },
  body: {
    type: String,
    required: true,
    maxlength: 500
  }
});

module.exports = mongoose.model('Note', noteSchema);
