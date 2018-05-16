const loadEx = require('./ex');
const loadLocations = require('./locations');
const writeEx = require('./exDom');
const writeLocations = require('./locDom');
const bindEvents = require('./events');

const initializer = () => {
  loadEx().then((data) => {
    $('#display-ex').append(writeEx(data.ex));
  }).catch((error) => {
    console.error('error', error);
  });
  loadLocations().then((data) => {
    $('#location-cards').append(writeLocations(data.locations));
  }).catch((error) => {
    console.error('error', error);
  });
  bindEvents();
};

module.exports = initializer;
