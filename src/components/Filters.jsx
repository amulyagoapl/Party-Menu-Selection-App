// export default function Filters({ filter, onFilterChange }) {
//   return (
//     <div className="filters">
//       {["ALL", "VEG", "NONVEG"].map((type) => (
//         <button
//           key={type}
//           className={filter-btn ${filter === type ? "active" : ""}}
//           onClick={() => onFilterChange(type)}
//         >
//           {type}
//         </button>
//       ))}
//     </div>
//   );
// }
export default function Filters({ filter, onFilterChange }) {
  // For Main Course, show "Main Course" + "North Indian"
  const types = ["Main Course", "North Indian"];
  return (
    <div className="filters">
      {types.map((type) => (
        <button
          key={type}
          className={`filter-btn ${filter === type ? "active" : ""}`}
          onClick={() => onFilterChange(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
