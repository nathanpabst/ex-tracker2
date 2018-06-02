const ex = require('./ex');
const loadLocations = require('./locations');
const writeAllExes = require('./exDom');
// const writeSingleEx = require('./singleExDom');
// const exDom = require('./exDom');
const writeLocations = require('./locDom');
const events = require('./events');

// const singleExInit = () => {
//   ex.loadSingleEx().then((data) => {
//     $('#singleEx').append(writeSingleEx(data.ex));
//   }).catch((error) => {
//     console.error('error loading single ex', error);
//   });
//   loadLocations().then((data) => {
//     $('.singleLocationCards').append(writeLocations(data.locations));
//   }).catch((error) => {
//     console.error('error loading locations', error);
//   });
// };

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

module.exports = {
  initializer,
};
