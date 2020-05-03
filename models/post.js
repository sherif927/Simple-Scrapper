const mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
  }, link: {
    type: String,
    required: true,
  }, metaValues: {
    type: [String],
    required: true,
  }
});

var Post = mongoose.model('Post', PostSchema);

module.exports = { Post };