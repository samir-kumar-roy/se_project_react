import "./itemCard.css";
export default function ItemCard({ item, handleCardClick }) {
  return (
    <li className="card">
      <h5 className="card__title">{item.name}</h5>
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={() => {
          handleCardClick(item);
        }}
      />
    </li>
  );
}
