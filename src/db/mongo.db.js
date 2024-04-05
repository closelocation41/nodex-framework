const mongoose = require("mongoose");
const {MONGODB} = require("../config/db.config");

const dbURL = `${MONGODB.URL}/${MONGODB.DBNAME}`
mongoose.connect(dbURL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});
