var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/posts', { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => { console.log('Connected Successfully 🐱‍👤🐱‍👤🐱‍👤') },
  err => { console.log(err) }
);

module.exports = mongoose;