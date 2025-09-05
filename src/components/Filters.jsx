export default function Filters({ filter, onFilterChange }) {
  return (
    <div className="filters">
      {["ALL", "VEG", "NONVEG"].map((type) => (
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
