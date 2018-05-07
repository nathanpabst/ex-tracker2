const showAM = (e) => {
  console.log(e.target);
  showTime(e);
};

// const hideTime = () => {

// };

const showTime = (e) => {
  const timeButton = $(e.target).closest('#location-cards');
  // const collection = $('#location-cards').text();
  // for (let i = 0; i < collection.length; i++) {
  console.log('timeButton', timeButton);
};

const bindEvents = () => {
  $('#am').on('click', showAM);
};

module.exports = bindEvents;
