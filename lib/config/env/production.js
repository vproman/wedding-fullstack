'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://' + process.env.MONGOUSER + ':' + process.env.MONGOPASS + 'localhost/fullstack'
  }
};