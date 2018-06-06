const {loadAllExes, loadSingleEx,} = require('./ex');
// const {} = require('./ex');
const loadLocations = require('./locations');
const {writeAllExes,} = require('./exDom');
const {writeSingleEx,} = require('./singleExDom');
const writeLocations = require('./locDom');
const events = require('./events');

exports.singleExInit = (exId) => {
  let exLocationIds;
  loadSingleEx(exId).then((singleEx) => {
    console.log(singleEx);
    exLocationIds = singleEx.locations;
    $('#singleEx').append(writeSingleEx(singleEx));
  }).catch((error) => {
    console.error('error loading single ex', error);
  });
  loadLocations().then((locations) => {
    // only pass in the exLocationIds
    console.log('from data', locations);
    const exLocations = [];
    locations.locations.forEach(location => {
      if (exLocationIds.includes(location.locationId)) {
        exLocations.push(location);
        // console.log(location);
      }
    });

    $('.singleLocationCards').append(writeLocations(exLocations));
    // console.log('from data exLocations', exLocations);
    // };
  }).catch((error) => {
    console.error('error loading locations', error);
  });
};

exports.initializer = () => {
  loadAllExes().then((data) => {
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

// module.exports = {
//   initializer,
//   singleExInit,
// };
