const timeOfDayBtns = (e) => {
  $(document).click((e) => {
    // console.log('from events', e.target.id);
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
  console.log('from events', e.target);
};

const bindEvents = () => {
  $('#am').on('click', timeOfDayBtns);
  $('#afternoon').on('click', timeOfDayBtns);
  $('#evening').on('click', timeOfDayBtns);
  $('#pm').on('click', timeOfDayBtns);
  $('#search').keypress(searchBar);
  $('.exButton').on('click', whichEx);
};

module.exports = {
  bindEvents,
};
