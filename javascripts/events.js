const showAM = (e) => {
  $('.time').not(":contains('AM')").closest('.location').hide();
  $('.time').filter(":contains('AM')").closest('.location').show();
};

const showAfternoon = (e) => {
  $('.time').not(":contains('Afternoon')").closest('.location').hide();
  $('.time').filter(":contains('Afternoon')").closest('.location').show();
};

const showEvening = (e) => {
  $('.time').not(":contains('Evening')").closest('.location').hide();
  $('.time').filter(":contains('Evening')").closest('.location').show();
};

const showPM = (e) => {
  $('.time').not(":contains('PM')").closest('.location').hide();
  $('.time').filter(":contains('PM')").closest('.location').show();
};

const bindEvents = () => {
  $('#am').on('click', showAM);
  $('#afternoon').on('click', showAfternoon);
  $('#evening').on('click', showEvening);
  $('#pm').on('click', showPM);
};

module.exports = bindEvents;
