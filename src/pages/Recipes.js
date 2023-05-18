import RecipeComponent from "../components/UI/RecipeComponent";

const Recipes = () => {
  return (
    <div>
      Recipes Page
      <div>
        <RecipeComponent title="Sushi" duration={12} />
      </div>
    </div>
  );
};

export default Recipes;
