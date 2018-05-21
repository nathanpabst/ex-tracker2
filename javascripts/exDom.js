// search button by class name 'exButton'
// add ids to ex.json

// const events = require('./events');

const writeAllExes = (exes) => {
  let output = '';
  exes.forEach((ex) => {
    output += `<div class="container-fluid">
                <div class="row ex">
                  <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                      <img class="ex-pic" src="${ex.imageURL}" alt="profile-pic">
                      <div class="caption ex-deets">
                        <h3>NAME: ${ex.name}</h3>
                        <h3>AGE: ${ex.age}</h3>
                        <h3>FLAWS: </h3>
                        <p>${ex.flaws}</p>
                        <p><a id="${ex.id}" href="#" class="btn btn-primary exButton" role="button">View</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
  });
  return output;
// events.exButtons();
};

module.exports = writeAllExes;
