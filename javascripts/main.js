const {initializer,} = require('./data');
const apiKeys = require('./apiKeys');

$(document).ready(() => {
  initializer();
  apiKeys.retrieveKeys();
});
