import "./DeleteButton.css";
export default function DeleteButton({ onDeleteClick }) {
  return (
    <button
      type="button"
      className="modal__delete-image"
      onClick={onDeleteClick}
    >
      Delete Item
    </button>
  );
}
