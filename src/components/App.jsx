import { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import { getWeatherApi, filterWeatherData } from "../utils/getWeatherApi";
import { defaultClothingItems, coordinates, apiKey } from "../utils/constants";
import AddItem from "./AddItem/AddItem";
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const handleClickModal = () => {
    setActiveModal("add-garment");
  };
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  useEffect(() => {
    getWeatherApi(coordinates, apiKey)
      .then((data) => {
        console.log(data);
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="page">
      <div className="page__content">
        <Header handleClickModal={handleClickModal} weatherData={weatherData} />
        <Main
          weatherData={weatherData}
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
        />
        <Footer />
      </div>
      <AddItem
        title="New Garment"
        buttonText="Add Garment"
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        isOpened={activeModal === "add-garment"}
      />
      <ItemModal
        card={selectedCard}
        activeModal={activeModal}
        closeCardModal={closeActiveModal}
      />
    </div>
  );
}

export default App;
