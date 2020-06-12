let mongoose = require("mongoose");
let connectionString = "mongodb+srv://test:test@test-cluster-fbocg.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connected")
});

module.exports = db