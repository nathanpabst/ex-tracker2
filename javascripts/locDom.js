const writeLocations = (locations) => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div class="col-sm-3 ${location.timeOfDay}">`;
    domString +=  `<div class="panel">`;
    domString +=    `<div class="panel-heading">`;
    domString +=      `<h3 class="panel-title">${location.name}</h3>`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString +=  `<div class="panel-body">`;
    domString +=    `<img class="location-photo" src="${location.imageURL}">`;
    domString +=    `<h4>${location.locationAddress}</h4>`;
    domString +=  `<div class="panel-footer">`;
    if (location.timeOfDay === 'AM') {
      domString += `<h4 class="am">${location.timeOfDay}</h4>`;
    } else if (location.timeOfDay === 'Afternoon') {
      domString += `<h4 class="afternoon">${location.timeOfDay}</h4>`;
    } else if (location.timeOfDay === 'Evening') {
      domString += `<h4 class="evening">${location.timeOfDay}</h4>`;
    } else {
      domString += `<h4 class="pm">${location.timeOfDay}</h4>`;
    }
    domString +=  `</div>`;
    domString += `</div>`;
  });
  return domString;
};

module.exports = writeLocations;
