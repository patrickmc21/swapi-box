export const fetchResidents = (planetResidents) => {
  const planets = planetResidents.map(resident => {
    return fetch(resident)
      .then(response => response.json())
      .then(resident => resident.name)
      .catch(error => new Error(error.message));
  });
  return Promise.all(planets);
};