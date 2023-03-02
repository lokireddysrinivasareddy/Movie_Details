const BASE_URL = "https://swapi.dev/api/";

export const fetchUrl = (url) => {
  const result = `${BASE_URL}${url}`;
  return result;
};
