import IngredientFridge from "../components/section/ingredient-items";
import Footer from "../components/UI/Footer";
import NavBar from "../components/UI/NavBar";

const Ingredients = () => {
  return (
    <div>
      <NavBar />
      <br></br>
      <IngredientFridge></IngredientFridge>
      <br></br>
      <br></br>
      <Footer></Footer>        
    </div>
  );
};

export default Ingredients;
