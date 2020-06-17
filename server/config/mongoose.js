const mongoose = require('mongoose');
const config = require('./');
const log = require('../config/winston')(module);

const options = {
  autoIndex: process.env.NODE_ENV !== 'production', // Mongoose-specific option. Set to false to disable automatic index creation for all models associated with this connection.
  poolSize: 50, // Maintain up to 50 socket connections
  wtimeout: 2500,
  bufferMaxEntries: 0, // If not connected, return errors immediately rather than waiting for reconnect
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // Mongoose-specific option. If true, this connection will use createIndex() instead of ensureIndex() for automatic index builds via Model.init()
};

const url = config.get('DB_URL');

mongoose.connect(url, options)
  .then(() => log.verbose('Connected to db'),
    (err) => {
      log.error('Mongoose Error ' + err);
      process.exit(1);
    }
  );

// mongoose.connection.on('error', function(err) {
//   console.log('on error', err);
// });
// mongoose.connection.on('close', () => { console.log('-> lost connection'); });
// mongoose.connection.once('open', function() {
//   console.log("Connection to db established.");
// });

module.exports = mongoose;
