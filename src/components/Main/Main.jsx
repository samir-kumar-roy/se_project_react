import "./main.css";
import WeatherCard from "../WeatherCard/weatherCard";
// import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
export default function Main({ weatherData, handleCardClick, clothingItems }) {
  return (
    <main>
      <WeatherCard
        handleCardClick={handleCardClick}
        weatherData={weatherData}
      />

      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F}&deg; F/ You may wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  item={item}
                  key={item._id}
                  handleCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}
