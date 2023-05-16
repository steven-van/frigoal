import fridge from "../../assets/imgs/svg/Freezer.svg";
import {CancelButton, IngredientButton} from "../UI/Buttons";
import IconFridge from "../../assets/imgs/svg/IconFridge.svg";
import IngredientAdd from "./ingredient-add";

const font = "font-montserrat";
const tab = ["ingredient1", "ingredient2 banane waouhh", "ingredient3", "ingredient4", "ingredient5", "ingredient6", "ingredient7"];
const IngredientFridge = () =>{
    return(
        <div class="container mx-auto px-20">
            <div class="flex min-h-0">
                <div className="flex-1">
                    <div className={`flex flex-row space-x-10 text-xl font-bold text-black ${font}`}>
                        <div>
                            My Ingredients 
                        </div>
                        <div className="relative">
                            <div className="flex">
                                <img className="h-12" src={IconFridge} alt="Votre image" />
                                <span className="ml-0 inline-flex items-center justify-center px-2 py-1 w-4 h-4 text-xs font-bold leading-none text-white bg-[#0BA95D] rounded-full">1</span>
                            </div>
                        </div>
                        {CancelButton()}
                    </div>
                    <br></br>
                    <div className="grid grid-cols-3 gap-4">
                        {tab.map((e) => <IngredientButton label={e} key={e}/>
                            )
                        }
                    </div>

                </div>
                <div className="flex-1 relative">
                    <IngredientAdd></IngredientAdd>
                </div>
            </div>
        </div>
    );
};
export default IngredientFridge;