import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setSearched(true);

    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=10`
      );

      const data = await res.json();

      // safer filtering
      const filtered = (data.products || []).filter(
        (p) => p.product_name
      );

      setResults(filtered);
    } catch (err) {
      console.log("API Error:", err);

      // 🔥 fallback fake data (IMPORTANT FOR DEMO)
      setResults([
        {
          code: "1",
          product_name: "Banana (Sample)",
          brands: "Demo",
          nutriments: {
            "energy-kcal_100g": 89,
            proteins_100g: 1.1,
            carbohydrates_100g: 23,
            fat_100g: 0.3,
          },
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>FoodFacts</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {!loading && !searched && (
        <p>Start by searching for a food 🍎</p>
      )}

      {!loading && searched && results.length === 0 && (
        <p>No results found ❌</p>
      )}

      {!loading && results.length > 0 && (
        <FoodList products={results} />
      )}
    </div>
  );
}

export default App;// FoodFacts Part 1 completed