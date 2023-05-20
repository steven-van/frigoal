import RecipeComponent from "../components/UI/RecipeComponent";
import Filter from "../components/UI/Filter";

const Recipes = () => {
  return (
    <div>
      <Filter />
      <div>
        <RecipeComponent title="Sushi" duration={12} />
      </div>
    </div>
  );
};

export default Recipes;
