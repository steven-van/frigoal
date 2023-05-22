import { useState, useEffect, useContext } from "react";
import RecipeComponent from "../components/UI/RecipeComponent";
import Filter from "../components/UI/Filter";
import NavBar from "../components/UI/NavBar";
import { AuthContext } from "../AuthContext";
import Footer from "../components/UI/Footer";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { email } = useContext(AuthContext);

  function fetchRecipes() {
    fetch(`http://localhost:3001/recipe/getRecipeByUser/${email}`, {
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
    fetchRecipes();
  }, []);

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <Filter />
      <div className="mx-10 text-[30px]">{recipes.length} Results</div>
      {recipes.length ? (
        <div className="grid grid-cols-3" id="recipe">
          {recipes.map((el, index) => (
            <RecipeComponent
              title={el.name}
              duration={Math.floor(Math.random() * (45 - 10 + 1)) + 10}
            />
          ))}
        </div>
      ) : (
        <div className="grid md:w-full lg:w-full place-items-center pt-8 h-screen">
          Pas de résultats
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Recipes;
