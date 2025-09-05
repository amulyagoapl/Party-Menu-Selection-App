import { Routes, Route } from "react-router-dom";
import DishListPage from "./pages/DishListPage";
import IngredientPage from "./pages/IngredientPage";

export default function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<DishListPage />} />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
      </Routes>
    </div>
  );
}
