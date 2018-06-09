const {loadAllExes, loadSingleEx,} = require('./ex');
const loadLocations = require('./locations');
const {writeAllExes,} = require('./exDom');
const {writeSingleEx,} = require('./singleExDom');
const {writeLocations, writeSingleLocations,} = require('./locDom');
const {bindEvents, showSingleExEvent, backButtonEvent,} = require('./events');

exports.singleExInit = (exId) => {
  let exLocationIds;
  loadSingleEx(exId).then((singleEx) => {
    exLocationIds = singleEx.locations;
    $('#singleEx').append(writeSingleEx(singleEx));
  }).catch((error) => {
    console.error('error loading single ex', error);
  });
  loadLocations().then((locations) => {
    // only pass in the exLocationIds
    const exLocations = [];
    locations.locations.forEach(location => {
      if (exLocationIds.includes(location.locationId)) {
        exLocations.push(location);
        console.log('from data', exLocations);
      }
    });
    $('.singleLocationCards').append(writeSingleLocations(exLocations));
    showSingleExEvent();
    backButtonEvent();
  }).catch((error) => {
    console.error('error loading locations', error);
  });
};

exports.initializer = () => {
  loadAllExes().then((data) => {
    $('#display-ex').append(writeAllExes(data));
    bindEvents();
  }).catch((error) => {
    console.error('error', error);
  });
  loadLocations().then((data) => {
    $('#location-cards').append(writeLocations(data.locations));
  }).catch((error) => {
    console.error('error', error);
  });
};
