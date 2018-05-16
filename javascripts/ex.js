const loadEx = () => {
  return new Promise((resolve, reject) => {
    $.get('./db/ex.json')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject('error, dang!', error);
      });
  });
};

module.exports = loadEx;
