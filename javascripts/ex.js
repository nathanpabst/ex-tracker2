const loadEx = (loadFunction, errorFunction) => {
  $.get('./db/ex.json')
    .done(loadFunction)
    .fail(errorFunction);
};

module.exports = loadEx;
