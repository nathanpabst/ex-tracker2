const writeLocations = (locations) => {
  let output = '';
  locations.forEach((location) => {
    output += `<div class="col-md-3 location">
                <h3 class="location-name">${location.name}</h3>
                <img class="location-photo" src="${location.imageURL}">
                <div class="caption">
                <h3 id="thumbnail-label">${location.locationAddress}</h3>
                <h4 class="time">${location.timeOfDay}</h4>
                </div>
              </div>`;
  });
  return output;
};

module.exports = writeLocations;
