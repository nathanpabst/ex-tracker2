const showAM = (e) => {
  $('.time').not(":contains('AM')").closest('.location').hide();
  $('.time').filter(":contains('AM')").closest('.location').show();
};

const showAfternoon = (e) => {
  $('.time').not(":contains('afternoon')").closest('.location').hide();
  $('.time').filter(":contains('afternoon')").closest('.location').show();
};

const bindEvents = () => {
  $('#am').on('click', showAM);
  $('#afternoon').on('click', showAfternoon);
};

module.exports = bindEvents;
