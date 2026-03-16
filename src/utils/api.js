const baseUrl = "http://localhost:3001";
const handleServerResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(new Error(`Error: ${res.status}`));
};
const headers = { "Content-Type": "application/json" };
const getItems = () => {
  return fetch(`${baseUrl}/items`, { headers }).then(handleServerResponse);
};
const addItem = ({ name, imageUrl, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(handleServerResponse);
};
const removeCard = (itemId) => {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers,
  }).then(handleServerResponse);
};

const api = {
  getItems,
  addItem,
  removeCard,
};

export default api;
