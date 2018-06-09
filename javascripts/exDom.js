const writeAllExes = (exes) => {
  let output = '';
  exes.forEach((ex) => {
    output += `<div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img class="ex-pic" src="${ex.imageURL}" alt="profile-pic">
                  <div class="caption ex-deets">
                    <h3>NAME: ${ex.name}</h3>
                    <h3>AGE: ${ex.age}</h3>
                    <h3>FLAWS: </h3>
                    <p>${ex.flaws}</p>
                    <p><button id="${ex.id}" class="btn btn-primary exButton">View</button>
                  </div>
                </div>
              </div>
              </div>`;
  });
  return output;
};

module.exports = {
  writeAllExes,
};
