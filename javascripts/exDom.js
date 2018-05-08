const writeEx = (exes) => {
  let domString = '';
  exes.forEach((ex) => {
    domString += `<div class="thumbnail">`;
    domString +=   `<img src="${ex.imageURL}" alt="profile-pic">`;
    domString +=   `<h3 id="thumbnail-label">NAME: ${ex.name}</h3>`;
    domString +=   `<h3>AGE: ${ex.age}</h3>`;
    domString +=   `<h3>FLAWS: ${ex.flaws}</h3>`;
    domString += `</div>`;
  });
  return domString;
};

module.exports = writeEx;
