// import { useState } from "react";
// import data from "../data/dishes.json";
// import DishCard from "../components/DishCard";
// import CategoryTabs from "../components/CategoryTabs";
// import Filters from "../components/Filters";
// import SearchBar from "../components/SearchBar";

// const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

// export default function DishListPage() {
//   const [currentCat, setCurrentCat] = useState("STARTER");
//   const [filter, setFilter] = useState("ALL");
//   const [search, setSearch] = useState("");
//   const [selected, setSelected] = useState([]);

//   const toggleSelect = (id) => {
//     setSelected((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };

//   const counts = categories.reduce((acc, cat) => {
//     acc[cat] = selected.filter((id) => {
//       const d = data.find((dish) => dish.id === id);
//       return d?.mealType === cat;
//     }).length;
//     return acc;
//   }, {});

//   // Filtering dishes properly
//   const dishes = data.filter((d) => {
//     if (d.mealType !== currentCat) return false;
//     if (
//       (currentCat === "STARTER" || currentCat === "MAIN COURSE") &&
//       filter !== "ALL" &&
//       d.type !== filter
//     ) {
//       return false;
//     }
//     if (search && !d.name.toLowerCase().includes(search.toLowerCase())) {
//       return false;
//     }
//     return true;
//   });

//   return (
//     <div className="app-container">
//       <h1 style={{ marginBottom: "16px", color: "#ff5722" }}>🍴 Party Menu</h1>

//       {/* Category tabs */}
//       <CategoryTabs
//         categories={categories}
//         current={currentCat}
//         onChange={setCurrentCat}
//         counts={counts}
//       />

//       {/* Search bar always visible */}
//       <SearchBar value={search} onChange={setSearch} />

//       {/* Show Main Course/North Indian filters for relevant categories */}
//       {(currentCat === "STARTER" || currentCat === "MAIN COURSE") && (
//         <Filters filter={filter} onFilterChange={setFilter} />
//       )}

//       {/* Display Main Course and North Indian headings */}
//       {currentCat === "MAIN COURSE" && (
//         <>
//           <h1
//             style={{
//               margin: "24px 0 8px 0",
//               color: "#ff5722",
//               fontSize: "2rem",
//               textAlign: "left",
//             }}
//           >
//             Main Course
//           </h1>
//           {filter === "North Indian" && (
//             <h2
//               style={{
//                 margin: "0 0 18px 0",
//                 color: "#4caf50",
//                 fontSize: "1.3rem",
//                 textAlign: "left",
//               }}
//             >
//               North Indian
//             </h2>
//           )}
//         </>
//       )}

//       {/* Dish list */}
//       <div className="dish-list">
//         {dishes.length === 0 ? (
//           <p style={{ color: "#888" }}>No dishes found</p>
//         ) : (
//           dishes.map((dish) => (
//             <DishCard
//               key={dish.id}
//               dish={dish}
//               isSelected={selected.includes(dish.id)}
//               onToggle={toggleSelect}
//             />
//           ))
//         )}
//       </div>

//       {/* Footer */}
//       <div className="footer">
//         <span>Total selected: {selected.length}</span>
//         <button>Continue</button>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import data from "../data/dishes.json";
import DishCard from "../components/DishCard";
import CategoryTabs from "../components/CategoryTabs";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";

const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

export default function DishListPage() {
  const [currentCat, setCurrentCat] = useState("STARTER");
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Count selected per category
  const counts = categories.reduce((acc, cat) => {
    acc[cat] = selected.filter((id) => {
      const d = data.find((dish) => dish.id === id);
      return d?.mealType === cat;
    }).length;
    return acc;
  }, {});

  // Filter dishes properly
  const dishes = data.filter((d) => {
    if (d.mealType !== currentCat) return false;
    if (
      (currentCat === "STARTER" || currentCat === "MAIN COURSE") &&
      filter !== "ALL" &&
      d.type !== filter
    ) {
      return false;
    }
    if (search && !d.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="app-container">
      <h1 style={{ marginBottom: "16px", color: "#ff5722" }}>🍴 Party Menu</h1>

      <CategoryTabs
        categories={categories}
        current={currentCat}
        onChange={setCurrentCat}
        counts={counts}
      />

      <SearchBar value={search} onChange={setSearch} />

      {(currentCat === "STARTER" || currentCat === "MAIN COURSE") && (
        <Filters filter={filter} onFilterChange={setFilter} />
      )}

      {/* Only show North Indian label as section heading */}
      {currentCat === "MAIN COURSE" && filter === "North Indian" && (
        <div
          style={{
            margin: "16px 0 10px 0",
            color: "#222",
            fontWeight: "bold",
            fontSize: "1.25rem",
            textAlign: "left",
          }}
        >
          North Indian
        </div>
      )}

      <div className="dish-list">
        {dishes.length === 0 ? (
          <p style={{ color: "#888" }}>No dishes found</p>
        ) : (
          dishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              isSelected={selected.includes(dish.id)}
              onToggle={toggleSelect}
            />
          ))
        )}
      </div>

      <div className="footer">
        <span>Total selected: {selected.length}</span>
        <button>Continue</button>
      </div>
    </div>
  );
}

