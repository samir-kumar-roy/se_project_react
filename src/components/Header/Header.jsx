import Logo from "../../assets/Logo.svg";
import "./Header.css";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
function Header({ handleClickModal, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="Logo" className="header__logo" />
      </Link>
      <p className="header__date-location">
        <span className="header__date">{currentDate}, </span>{" "}
        <span className="header__location">{weatherData.city}</span>
      </p>
      <ToggleSwitch />
      <button
        type="button"
        className="header__add-clothes-btn"
        onClick={handleClickModal}
      >
        +Add Clothes
      </button>
      <Link to="/profile" className="header__link">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>
      </Link>
    </div>
  );
}
export default Header;
