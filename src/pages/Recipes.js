import RecipeComponent from "../components/UI/RecipeComponent";
import Filter from "../components/UI/Filter";
import NavBar from "../components/UI/NavBar";

const Recipes = () => {
    const recipes = [
        { title: "Sushi", duration: 12 },
        { title: "Sushi", duration: 12 },
        { title: "Sushi", duration: 12 },
        { title: "Sushi", duration: 12 },
        { title: "Sushi", duration: 12 },
        { title: "Sushi", duration: 12 },
    ];
    return (
        <div>
            <NavBar />
            <Filter />
            <div className="mx-10 text-[30px]">{recipes.length} Results</div>
            <div className="grid grid-cols-3" id="recipe">
                {recipes.map((el, index) => (
                    <RecipeComponent title={el.title} duration={el.duration} />
                ))}
            </div>
        </div>
    );
};

export default Recipes;
