export const getWeatherApi = ({ latitude, longitude }, apiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const weatherData = {};
  weatherData.city = data.name;
  weatherData.temp = { F: data.main.temp };
  weatherData.type = getWeatherType(weatherData.temp.F);
  weatherData.condition = data.weather[0].main.toLowerCase();
  weatherData.isDay = isDay(data.sys, Date.now());
  return weatherData;
};
const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 66 && temperature < 86) {
    return "warm";
  } else {
    return "cold";
  }
};
const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};
