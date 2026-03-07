import close from "../../assets/close.svg";
import "./modalWithForm.css";
export default function ModalWithForm({
  title,
  buttonText,
  closeActiveModal,
  isOpened,
  onSubmit,
  children,
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
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
