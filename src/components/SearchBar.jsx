export default function SearchBar({ value, onChange }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <input
        type="text"
        placeholder="Search dishes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search"
      />
    </div>
  );
}
