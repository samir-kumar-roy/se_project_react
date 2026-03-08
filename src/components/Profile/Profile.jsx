import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

export default function Profile({
  handleCardClick,
  clothingItems,
  addGarment,
}) {
  return (
    <section className="profile">
      <Sidebar />
      <ClothesSection
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        addGarment={addGarment}
      />
    </section>
  );
}
