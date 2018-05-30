const ex = require('./ex');
const loadLocations = require('./locations');
const writeAllExes = require('./exDom');
// const writeOneEx = require('./singleExDom');
const writeLocations = require('./locDom');
const events = require('./events');

const initializer = () => {
  ex.loadAllExes().then((data) => {
    $('#display-ex').append(writeAllExes(data));
    events.bindEvents();
  }).catch((error) => {
    console.error('error', error);
  });
  loadLocations().then((data) => {
    $('#location-cards').append(writeLocations(data.locations));
  }).catch((error) => {
    console.error('error', error);
  });
};

module.exports = initializer;
