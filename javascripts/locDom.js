const writeLocations = (locations) => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div class="col-sm-3 location">`;
    domString +=  `<div class="panel">`;
    domString +=    `<div class="panel-heading">`;
    domString +=      `<h3 class="panel-title">${location.name}</h3>`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString +=  `<div class="panel-body">`;
    domString +=    `<img class="location-photo" src="${location.imageURL}">`;
    domString +=    `<h4>${location.locationAddress}</h4>`;
    domString +=  `<div class="panel-footer">`;
    domString += `<h4 class="time">${location.timeOfDay}</h4>`;
    domString +=  `</div>`;
    domString += `</div>`;
  });
  return domString;
};

module.exports = writeLocations;
