import { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import { getWeatherApi, filterWeatherData } from "../utils/getWeatherApi";
import { coodinates, ApiKey } from "../utils/constants";
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
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
    getWeatherApi(coodinates, ApiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="page">
      <div className="page__content">
        <Header handleClickModal={handleClickModal} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        title="New Garment"
        buttonText="Add Garment"
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
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
