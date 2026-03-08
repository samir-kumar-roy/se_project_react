import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
export default function ClothesSection({
  handleCardClick,
  clothingItems,
  addGarment,
}) {
  return (
    <div className="clothes">
      <div className="clothes__heading">
        <span>Your Items</span>
        <button
          type="button"
          onClick={addGarment}
          className="profile__add-clothes-btn"
        >
          +Add New
        </button>
      </div>
      <ul className="clothes__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              item={item}
              key={item._id}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
