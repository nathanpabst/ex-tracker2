const writeLocations = (locations) => {
  let output = '';
  locations.forEach((location) => {
    output += `<div class="col-sm-4 location">
                <div class="panel">
                  <img class="location-photo" src="${location.imageURL}">
                  <h3>${location.name}</h3>
                  <p>${location.locationAddress}</p>
                <div class="panel-footer time">${location.timeOfDay}</div>
                </div>
              </div>`;
  });
  return output;
};

module.exports = writeLocations;
