const writeEx = (exes) => {
  let domString = '';
  exes.forEach((ex) => {
    domString += `<div class="thumbnail">`;
    domString +=   `<h2 id="thumbnail-label">${ex.name}</h2>`;
    domString +=   `<img src="${ex.imageURL}" alt="profile-pic">`;
    domString +=   `<h3>Age: ${ex.age}</h3>`;
    domString +=   `<h4>Flaws: ${ex.flaws}</h4>`;
    domString += `</div>`;
  });
  return domString;
};

module.exports = writeEx;
