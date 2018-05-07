const loadEx = require('./ex');
const loadLocations = require('./locations');
const writeEx = require('./exDom');
const writeLocations = require('./locDom');

const whenExLoads = (data) => {
  console.log('data', data);
  $('#display-ex').append(writeEx(data.ex));
};

const whenExDoesntLoad = (error) => {
  console.error('error', error);
};

const whenLocationsLoad = (data) => {
  console.log('data', data);
  $('#location-cards').append(writeLocations(data.locations));
};

const whenLocationsDontLoad = (error) => {
  console.error('error', error);
};

const initializer = () => {
  loadEx(whenExLoads, whenExDoesntLoad);
  loadLocations(whenLocationsLoad, whenLocationsDontLoad);
};

module.exports = initializer;
