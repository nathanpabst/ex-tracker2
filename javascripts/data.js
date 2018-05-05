const loadEx = require('./ex');
const loadLocations = require('./locations');

const whenExLoads = (data) => {
  console.log('data', data);
};

const whenExDoesntLoad = (error) => {
  console.error('error', error);
};

const whenLocationsLoad = (data) => {
  console.log('data', data);
};

const whenLocationsDontLoad = (error) => {
  console.error('error', error);
};

const initializer = () => {
  loadEx(whenExLoads, whenExDoesntLoad);
  loadLocations(whenLocationsLoad, whenLocationsDontLoad);
};

module.exports = initializer;
