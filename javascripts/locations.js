const loadLocations = () => {
  return new Promise((resolve, reject) => {
    $.get('./db/locations.json')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject('error, dang!', error);
      });
  });
};

module.exports = loadLocations;
