// // import { useParams, Link } from "react-router-dom";
// // import data from "../data/dishes.json";

// // export default function IngredientPage() {
// //   const { id } = useParams();
// //   const dish = data.find((d) => d.id === parseInt(id));

// //   const mockIngredients = [
// //     { name: "Paneer", qty: "200g" },
// //     { name: "Onion", qty: "1 cup" },
// //     { name: "Capsicum", qty: "1/2 cup" },
// //     { name: "Spices", qty: "to taste" },
// //   ];

// //   return (
// //     <div className="app-container">
// //       <h2 style={{ marginBottom: "10px", color: "#4caf50" }}>
// //         {dish?.name}
// //       </h2>
// //       <p style={{ marginBottom: "20px", color: "#666" }}>
// //         {dish?.description}
// //       </p>

// //       <h3>Ingredients</h3>
// //       <ul style={{ marginTop: "10px", marginBottom: "20px" }}>
// //         {mockIngredients.map((ing, idx) => (
// //           <li key={idx}>
// //             {ing.name} - {ing.qty}
// //           </li>
// //         ))}
// //       </ul>

// //       <Link
// //         to="/"
// //         style={{
// //           display: "inline-block",
// //           background: "#2196f3",
// //           color: "white",
// //           padding: "8px 16px",
// //           borderRadius: "8px",
// //           textDecoration: "none",
// //         }}
// //       >
// //         ⬅ Back to Menu
// //       </Link>
// //     </div>
// //   );
// // }

// // after adding image
import { useParams, Link } from "react-router-dom";
import data from "../data/dishes.json";

export default function IngredientPage() {
  const { id } = useParams();
  const dish = data.find((d) => d.id === parseInt(id));

  const mockIngredients = [
    { name: "Paneer", qty: "200g" },
    { name: "Onion", qty: "1 cup" },
    { name: "Capsicum", qty: "1/2 cup" },
    { name: "Spices", qty: "to taste" },
  ];

  return (
    <div className="app-container">
      {/* Display dish image at the top */}
      {dish && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={dish.image || "/placeholder.jpeg"}
            alt={dish.name}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          />
        </div>
      )}

      <h2 style={{ marginBottom: "10px", color: "#4caf50" }}>
        {dish?.name}
      </h2>
      <p style={{ marginBottom: "20px", color: "#666" }}>
        {dish?.description}
      </p>

      <h3>Ingredients</h3>
      <ul style={{ marginTop: "10px", marginBottom: "20px" }}>
        {mockIngredients.map((ing, idx) => (
          <li key={idx}>
            {ing.name} - {ing.qty}
          </li>
        ))}
      </ul>

      <Link
        to="/"
        style={{
          display: "inline-block",
          background: "#2196f3",
          color: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        ⬅ Back to Menu
      </Link>
    </div>
  );
}
