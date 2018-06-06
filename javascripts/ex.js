const loadAllExes = () => {
  return new Promise((resolve, reject) => {
    $.get('./db/ex.json')
      .done((data) => {
        resolve(data.ex);
      })
      .fail((error) => {
        reject('error, dang!', error);
      });
  });
};

const loadSingleEx = (id) => {
  return new Promise((resolve, reject) => {
    $.get('./db/ex.json')
      .done((data) => {
        resolve(data.ex[id]);
        // console.log('from ex', data.ex[id]);

      })
      .fail((error) => {
        reject('error, dang!', error);
      });
  });
};

module.exports = {
  loadAllExes,
  loadSingleEx,
};
