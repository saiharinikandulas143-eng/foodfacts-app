import FoodCard from "./FoodCard";

function FoodList({ products }) {
  return (
    <div>
      {products.map((item) => (
        <FoodCard key={item.code} product={item} />
      ))}
    </div>
  );
}

export default FoodList;