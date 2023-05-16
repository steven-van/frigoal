import IngredientFridge from "../components/section/ingredient-items";
import Footer from "../components/UI/Footer";
import NavBar from "../components/UI/NavBar";
import IngredientAdd from "../components/section/ingredient-add"

const Ingredients = () => {
  return (
    <div>
      <NavBar />
      <br></br>
      <IngredientFridge></IngredientFridge>
      <br></br>
      <IngredientAdd></IngredientAdd>
      <br></br>
      <Footer></Footer>        
    </div>
  );
};

export default Ingredients;
