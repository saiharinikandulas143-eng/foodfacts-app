function FoodCard({ product }) {
  return (
    <div>
      <h3>{product.product_name || "No Name"}</h3>
      <p>{product.brands || "Unknown"}</p>

      <img
        src={product.image_small_url || "https://via.placeholder.com/100"}
        alt="food"
      />

      <p>Calories: {product.nutriments?.energy-kcal_100g || "N/A"}</p>
      <p>Protein: {product.nutriments?.proteins_100g || "N/A"}</p>
      <p>Carbs: {product.nutriments?.carbohydrates_100g || "N/A"}</p>
    </div>
  );
}

export default FoodCard;