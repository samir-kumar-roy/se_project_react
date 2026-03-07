import { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import ItemModal from "./ItemModal/ItemModal";
import { getWeatherApi, filterWeatherData } from "../utils/getWeatherApi";
import { coordinates, apiKey } from "../utils/constants";
import api from "../utils/api";
import AddItem from "./AddItem/AddItem";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import DeleteConfirmModal from "./DeleteConfirmModal/DeleteConfirmModal";
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };
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

  const onAddItem = (inputData) => {
    const newInputData = {
      _id: clothingItems.length + 1,
      name: inputData.name,
      imageUrl: inputData.imageUrl,
      weather: inputData.weatherType,
    };
    api
      .addItem(newInputData)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
      })
      .catch(console.error);
    closeActiveModal();
  };
  const deleteItemHandle = (e) => {
    e.preventDefault();
    setIsDeleteConfirmOpen(true);
  };
  const deleteImage = () => {
    console.log("Delete confirm button clicked!");
    console.log("deleting card ", selectedCard._id);
    api
      .removeCard(selectedCard._id)
      .then((response) => {
        console.log(response);
        setClothingItems((clothingItems) => {
          return clothingItems.filter((item) => item._id !== selectedCard._id);
        });
        setIsDeleteConfirmOpen(false);
        closeActiveModal();
      })
      .catch();
  };
  useEffect(() => {
    getWeatherApi(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => console.error(err));

    api
      .getItems()
      .then((data) => {
        setClothingItems([...data].reverse());
      })
      .catch(console.error);
  }, []);
  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header
            handleClickModal={handleClickModal}
            weatherData={weatherData}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  addGarment={handleClickModal}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItem
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
          isOpened={activeModal === "add-garment"}
          onAddItem={onAddItem}
        />
        <ItemModal
          card={selectedCard}
          activeModal={activeModal}
          closeCardModal={closeActiveModal}
          deleteClickHandle={deleteItemHandle}
        />
        {isDeleteConfirmOpen && (
          <DeleteConfirmModal
            onDeleteConfirmClose={() => {
              setIsDeleteConfirmOpen(false);
            }}
            onDeleteConfirmClick={deleteImage}
          />
        )}
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
