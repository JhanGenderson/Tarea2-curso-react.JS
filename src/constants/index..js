const base_url = "http://gateway.marvel.com/";
const api_key = "&apikey=87df654e5cf14a1f0664696e81d96823";
const ts_key = "?ts=1";
const public_url = "v1/public/";
// End Points
const characters = "v1/public/characters";

// Listado de personajes
export const characterListGet = () =>
  `${base_url}${characters}${ts_key}${api_key}`;

//Busqueda de character
export const characterSearch = (characterName) =>
  `${base_url}${public_url}${characterName}${ts_key}${api_key}`;

// Detalle Character
export const characterDetailGet = (characterId) =>
  `${base_url}${characters}/${characterId}?${api_key}`;
