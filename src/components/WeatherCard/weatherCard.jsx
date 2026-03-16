import { useContext } from "react";
import { weatherOptions, defaultWeatherOption } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./weatherCard.css";
export default function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const filteredWeatherOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  let weatherOption;
  if (filteredWeatherOptions.length === 0) {
    weatherOption = defaultWeatherOption[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredWeatherOptions[0];
  }
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}
        &deg; {currentTemperatureUnit}
      </p>
      <img
        src={weatherOption.url}
        alt={`showing ${weatherOption?.condition} in the ${
          weatherOption?.day ? "day" : "night"
        } time`}
        className="weather-card__image"
      />
    </section>
  );
}
