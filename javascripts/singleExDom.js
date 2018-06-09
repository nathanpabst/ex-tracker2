const writeSingleEx = (deet) => {
  let output = '';
  output += `<div class="container-fluid">
                <div class="row ex">
                  <div class="col-md-4 col-sm-offset-2 text-center">
                    <img class="ex-pic" src="${deet.imageURL}" alt="profile-pic">
                  </div>
                  <div class="col-sm-4 ex-deets">
                    <h3>NAME: ${deet.name}</h3>
                    <h3>AGE: ${deet.age}</h3>
                    <h3>FLAWS: </h3>
                    <p>${deet.flaws}</p>
                    <p><button id="${deet.id}" class="btn btn-primary backButton">Back</button>
                  </div>
                </div>
              </div>`;
  return output;
};

module.exports = {
  writeSingleEx,
};
