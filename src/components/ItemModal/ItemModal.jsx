import close from "../../assets/close.svg";
import "./itemModal.css";
export default function ItemModal({ card, activeModal, closeCardModal }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content-item_modal">
        <div className="modal__body">
          <button
            className="modal__close-btn modal__close-item"
            onClick={closeCardModal}
          >
            <img
              src={close}
              alt="Item modal close button image"
              className="modal__close-image"
            />
          </button>
          <img
            src={card.link}
            alt="Card image preview"
            className="modal__image"
          />
        </div>
        <div className="modal__footer">
          <h2 className="modal__item-name">{card.name}</h2>
          <p className="modal__weather-type">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
