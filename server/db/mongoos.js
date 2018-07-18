const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Todos', { useNewUrlParser: true });

module.export = {mongoose};
