// REFACTOR THE 'SHOW' FUNCTIONS INTO A SINGLE FUNCTION
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
// SEARCH FUNCTIONALITY
jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const searchBar = (e) => {
  if (e.which === 13) {
    const searchInput = $(e.target).val();
    $(`#location-cards .location:not(:icontains(${searchInput}))`).hide();
    $(e.target).val('');
  };
};
// END SEARCH FUNCTIONALITY

const whichEx = () => {

};

const exButtons = (e) => {
  $('.exButton').on('click', whichEx);
};

const bindEvents = () => {
  $('#am').on('click', showAM);
  $('#afternoon').on('click', showAfternoon);
  $('#evening').on('click', showEvening);
  $('#pm').on('click', showPM);
  $('#search').keypress(searchBar);
};

module.exports = {
  bindEvents,
  exButtons,
};
