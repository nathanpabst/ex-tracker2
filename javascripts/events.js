const dataFuncs = require('./data');

const timeOfDayBtns = (e) => {
  $(document).click((e) => {
    if (e.target.id === 'am') {
      $('.time').not(":contains('AM')").closest('.location').hide();
      $('.time').filter(":contains('AM')").closest('.location').show();
    } else if (e.target.id === 'afternoon') {
      $('.time').not(":contains('Afternoon')").closest('.location').hide();
      $('.time').filter(":contains('Afternoon')").closest('.location').show();
    } else if (e.target.id === 'evening') {
      $('.time').not(":contains('Evening')").closest('.location').hide();
      $('.time').filter(":contains('Evening')").closest('.location').show();
    } else if (e.target.id === 'pm') {
      $('.time').not(":contains('PM')").closest('.location').hide();
      $('.time').filter(":contains('PM')").closest('.location').show();
    };
  });
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

const whichEx = (e) => {
  const exId = e.target.id - 1;
  dataFuncs.singleExInit(exId);
};

const bindEvents = () => {
  $('#am').on('click', timeOfDayBtns);
  $('#afternoon').on('click', timeOfDayBtns);
  $('#evening').on('click', timeOfDayBtns);
  $('#pm').on('click', timeOfDayBtns);
  $('#search').keypress(searchBar);
  $('.exButton').on('click', whichEx);
};

const showSingleExEvent = () => {
  $('#display-ex').addClass('hide');
  $('#singleEx').removeClass('hide');
  $('.filterByTime').addClass('hide');
  $('.searchByLocation').addClass('hide');
  $('#location-cards').addClass('hide');
  $('#singleLocationCards').removeClass('hide');
};

const showAllExes = () => {
  $('#display-ex').removeClass('hide');
  $('#singleEx').addClass('hide');
  $('.filterByTime').removeClass('hide');
  $('.searchByLocation').removeClass('hide');
  $('#location-cards').removeClass('hide');
  $('#singleLocationCards').addClass('hide');
};

const backButtonEvent = () => {
  $(document).on('click', '.backButton', () => {
    showAllExes();
  });
};

module.exports = {
  bindEvents,
  whichEx,
  showSingleExEvent,
  backButtonEvent,
};
