import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function AddItem({
  title,
  buttonText,
  activeModal,
  closeActiveModal,
  isOpened,
}) {
  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      closeActiveModal={closeActiveModal}
      isOpened={isOpened}
    >
      <label htmlFor="input-name" className="modal__label">
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
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="hot"
            value="hot"
            name="temp"
            className="modal__radio-input"
          />{" "}
          Hot
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="cold"
            value="cold"
            name="temp"
            className="modal__radio-input"
          />{" "}
          Cold
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="warm"
            value="warm"
            name="temp"
            className="modal__radio-input"
          />{" "}
          Warm
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
