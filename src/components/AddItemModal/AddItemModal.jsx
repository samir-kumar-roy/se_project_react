import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

export default function AddItemModal({
  closeActiveModal,
  isOpened,
  onAddItem,
}) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weatherType: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    onAddItem(values);
  }
  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Save"
      closeActiveModal={closeActiveModal}
      isOpened={isOpened}
      onSubmit={handleSubmit}
    >
      <label htmlFor="input-name" className="modal__label">
        <span>Name </span>
        <input
          type="text"
          className="modal__input"
          id="input-name"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="input-url" className="modal__label">
        <span>Image </span>
        <input
          name="imageUrl"
          type="url"
          className="modal__input"
          id="input-url"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="hot"
            name="weatherType"
            className="modal__radio-input"
            value="hot"
            onChange={handleChange}
          />{" "}
          <span className="modal__label_text">Hot</span>
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="cold"
            name="weatherType"
            className="modal__radio-input"
            value="cold"
            onChange={handleChange}
          />{" "}
          <span className="modal__label_text">Cold</span>
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="warm"
            name="weatherType"
            className="modal__radio-input"
            value="warm"
            onChange={handleChange}
          />{" "}
          <span className="modal__label_text">Warm</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
