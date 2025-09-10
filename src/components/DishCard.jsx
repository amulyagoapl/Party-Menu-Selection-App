//import { Link } from "react-router-dom";

// export default function DishCard({ dish, isSelected, onToggle }) {
//   return (
//     <div className="card">
//       <img src={dish.image || "/placeholder.jpeg"} alt={dish.name} />
//       <div className="details" style={{ flex: 1 }}>
//         <h3>{dish.name}</h3>
//         <p>{dish.description}</p>
//         <div className="actions">
//           <button
//             className="add-btn"
//             onClick={() => onToggle(dish.id)}
//           >
//             {isSelected ? "Remove" : "Add"}
//           </button>
//           <Link className="ingredients-link" to={`/ingredients/${dish.id}`}>
//             Ingredients
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default function DishCard({ dish, isSelected, onToggle }) {
//   return (
//     <div className="card">
//       {/* Details on left */}
//       <div className="details" style={{ flex: 1 }}>
//         <h3>{dish.name}</h3>
//         <p>{dish.description}</p>
//         <Link className="ingredients-link" to={`/ingredients/${dish.id}`}>
//           Ingredients
//         </Link>
//       </div>

//       {/* Image + button stacked on right */}
//       <div className="image-container">
//         <img src={dish.image || "/placeholder.jpeg"} alt={dish.name} />
//         <button className="add-btn" onClick={() => onToggle(dish.id)}>
//           {isSelected ? "−" : "➕"}
//         </button>
//       </div>
//     </div>
//   );
// }
// import { Link } from "react-router-dom";

// export default function DishCard({ dish, isSelected, onToggle }) {
//   return (
//     <div className="card">
//       {/* Image and overlapping button */}
//       <div style={{ position: "relative", width: "100px", height: "100px" }}>
//         <img
//           src={dish.image || "/placeholder.jpeg"}
//           alt={dish.name}
//           style={{
//             width: "100px",
//             height: "100px",
//             borderRadius: "12px",
//             objectFit: "cover"
//           }}
//         />
//         <button
//           className="add-btn"
//           onClick={() => onToggle(dish.id)}
//           style={{
//             position: "absolute",
//             left: "50%",
//             bottom: "-10px", // Adjust as needed for your look
//             transform: "translateX(-50%)",
//             zIndex: 1,
//             minWidth: "80px",
//             boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
//           }}
//         >
//           {isSelected ? "Remove" : "Add +"}
//         </button>
//       </div>
  
//       {/* Details */}
//       <div className="details" style={{ flex: 1 }}>
//         <h3>{dish.name}</h3>
//         <p>{dish.description}</p>
//         <div className="actions">
//           <Link className="ingredients-link" to={`/ingredients/${dish.id}`}>
//             Ingredients
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";

export default function DishCard({ dish, isSelected, onToggle }) {
  return (
    <div className="card">
      {/* Image and overlapping button */}
      <div style={{ position: "relative", width: "100px", height: "100px" }}>
        <img
          src={dish.image || "/placeholder.jpeg"}
          alt={dish.name}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "12px",
            objectFit: "cover"
          }}
        />
        <button
          className="add-btn"
          onClick={() => onToggle(dish.id)}
          style={{
            position: "absolute",
            left: "50%",
            bottom: "-10px", // Adjust as needed for your look
            transform: "translateX(-50%)",
            zIndex: 1,
            minWidth: "80px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
          }}
        >
          {isSelected ? "Remove" : "Add +"}
        </button>
      </div>

      {/* Details */}
      <div className="details" style={{ flex: 1 }}>
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <div className="actions">
          <Link className="ingredients-link" to={`/ingredients/${dish.id}`}>
            Ingredients
          </Link>
        </div>
      </div>
    </div>
  );
}
