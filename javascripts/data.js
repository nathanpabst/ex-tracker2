const loadEx = require('./ex');
const loadLocations = require('./locations');
const writeEx = require('./exDom');
const writeLocations = require('./locDom');
const bindEvents = require('./events');

const whenLocationsLoad = (data) => {
  // console.log('data', data);
  $('#location-cards').append(writeLocations(data.locations));
};

const whenLocationsDontLoad = (error) => {
  console.error('error', error);
};

const initializer = () => {
  loadEx().then((data) => {
    $('#display-ex').append(writeEx(data.ex));
  }).catch((error) => {
    console.error('error', error);
  });
  loadLocations(whenLocationsLoad, whenLocationsDontLoad);
  bindEvents();
};

module.exports = initializer;
