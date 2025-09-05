import { Link } from "react-router-dom";

export default function DishCard({ dish, isSelected, onToggle }) {
  return (
    <div className="card">
      <img src={dish.image || "/placeholder.jpeg"} alt={dish.name} />
      <div className="details" style={{ flex: 1 }}>
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <div className="actions">
          <button
            className="add-btn"
            onClick={() => onToggle(dish.id)}
          >
            {isSelected ? "Remove" : "Add"}
          </button>
          <Link className="ingredients-link" to={`/ingredients/${dish.id}`}>
            Ingredients
          </Link>
        </div>
      </div>
    </div>
  );
}
