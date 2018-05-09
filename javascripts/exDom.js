const writeEx = (exes) => {
  let output = '';
  exes.forEach((ex) => {
    output += `<div class="container-fluid">
                <div class="row ex">
                  <div class="col-sm-4 col-sm-offset-2 text-center">
                    <img class="ex-pic" src="${ex.imageURL}" alt="profile-pic">
                  </div>
                  <div class="col-sm-4 ex-deets">  
                    <h3>NAME: ${ex.name}</h3>
                    <h3>AGE: ${ex.age}</h3>
                    <h3>FLAWS: </h3>
                    <p>${ex.flaws}</p>
                  </div>
                </div>    
              </div>`;
  });
  return output;
};

module.exports = writeEx;
