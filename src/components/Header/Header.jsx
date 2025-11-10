import Logo from "../../assets/Logo.svg";
import "./Header.css";
import avatar from "../../assets/avatar.svg";
function Header({ handleClickModal, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="header__logo" />
      <p className="header__date-location">
        <span className="heaer__date">{currentDate}, </span>{" "}
        <span className="header__location">{weatherData.city}</span>
      </p>
      <button
        type="button"
        className="header__add-clothes-btn"
        onClick={handleClickModal}
      >
        +Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </div>
  );
}
export default Header;
