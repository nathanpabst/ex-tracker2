const loadAllExes = () => {
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

// const loadSingleEx = (id) => {
//   return new Promise((resolve, reject) => {
//     $.get('./db/ex.json')
//       .done((data) => {
//         resolve(data);
//       })
//       .fail((error) => {
//         reject('error, dang!', error);
//       });
//   });
// };

module.exports = loadAllExes;
