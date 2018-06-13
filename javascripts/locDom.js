const writeLocations = (locations) => {
  let output = '';
  locations.forEach((location) => {
    output +=     `<div class="col-sm-4 location" id="${location.id}">`;
    output +=            `<div class="panel">`;
    output +=              `<img class="location-photo" src="${location.imageURL}">`;
    output +=              `<h3>${location.name}</h3>`;
    output +=              `<p>${location.locationAddress}</p>`;
    output +=            `<div class="panel-footer time">${location.timeOfDay}</div>`;
    output +=          `</div>`;
    output +=        `</div>`;
  });
  return output;
};

const writeSingleLocations = (exLocations) => {
  let output = '';
  exLocations.forEach((location) => {
    output +=     `<div class="col-sm-4 singleLocation">`;
    output +=            `<div class="panel">`;
    output +=              `<img class="location-photo" src="${location.imageURL}">`;
    output +=              `<h3>${location.name}</h3>`;
    output +=              `<p>${location.locationAddress}</p>`;
    output +=            `<div class="panel-footer time">${location.timeOfDay}</div>`;
    output +=          `</div>`;
    output +=        `</div>`;
  });
  return output;
};

module.exports = {
  writeLocations,
  writeSingleLocations,
};
