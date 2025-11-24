import close from "../../assets/close.svg";
import "./modalWithForm.css";
export default function ModalWithForm({
  title,
  buttonText,
  closeActiveModal,
  children,
  isOpened,
}) {
  return (
    <div className={`modal ${isOpened && "modal_opened"}`}>
      <div className="modal__content">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button
            type="button"
            className="modal__close-btn"
            onClick={closeActiveModal}
          >
            <img src={close} alt="modal close button" />
          </button>
        </div>
        <form className="modal__form">
          {children}
          {/* <label htmlFor="input-name" className="modal__label">
            <span>Name </span>
            <input
              type="text"
              className="modal__input"
              id="input-name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="input-url" className="modal__label">
            <span>Image </span>
            <input
              type="url"
              className="modal__input"
              id="input-url"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                id="hot"
                value="hot"
                name="temp"
                className="modal__radio-input"
              />{" "}
              Hot
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                id="clod"
                value="cold"
                name="temp"
                className="modal__radio-input"
              />{" "}
              Cold
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                id="warm"
                value="warm"
                name="temp"
                className="modal__radio-input"
              />{" "}
              Warm
            </label>
          </fieldset> */}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
