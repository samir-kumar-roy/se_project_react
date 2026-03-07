import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothSection from "../ClothSection/ClothSection";

export default function Profile({
  handleCardClick,
  clothingItems,
  addGarment,
}) {
  return (
    <section className="profile">
      <Sidebar />
      <ClothSection
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        addGarment={addGarment}
      />
    </section>
  );
}
