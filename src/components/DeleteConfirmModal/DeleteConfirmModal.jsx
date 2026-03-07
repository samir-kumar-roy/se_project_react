import "./DeleteConfirmModal.css";
import close from "../../assets/close.svg";
export default function DeleteConfirmModal({
  onDeleteConfirmClose,
  onDeleteConfirmClick,
}) {
  return (
    <div className="modal-delete-confirm">
      <div className="modal-delete-confirm__inner">
        <div className="modal-delete-confirm__header">
          <button
            type="button"
            className="modal-delete-confirm__close"
            onClick={onDeleteConfirmClose}
          >
            <img src={close} alt="delete confirm modal close" className="" />
          </button>
        </div>
        <div className="modal-delete-confirm__body">
          <p>
            Are you sure you want to delete this item? This action is
            irreversible.
          </p>
          <button
            type="button"
            className="delete-confirm-button"
            onClick={onDeleteConfirmClick}
          >
            Yes, delete item
          </button>
          <button
            type="button"
            className="delete-cancel-button"
            onClick={onDeleteConfirmClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
