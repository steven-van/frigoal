import { useState, useEffect } from "react";
import RecipeComponent from "../components/UI/RecipeComponent";
import Filter from "../components/UI/Filter";
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  function fetchRecipes(userId) {
    fetch(`http://localhost:3001/recipe/getRecipeByUser/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des recettes :",
          error
        );
      });
  }

  useEffect(() => {
    fetchRecipes(1);
  }, []);

  return (
    <div>
      <NavBar />
      <Filter />
      <div className="mx-10 text-[30px]">{recipes.length} Results</div>
      <div className="grid grid-cols-3" id="recipe">
        {recipes.map((el, index) => (
          <RecipeComponent
            title={el.name}
            duration={Math.floor(Math.random() * (45 - 10 + 1)) + 10}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Recipes;
