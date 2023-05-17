import Recipe from "../../assets/images/svg/recipe.svg";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState } from "react";

const RecipeComponent = () => {
  const [starColor, setStarColor] = useState("white");
  const initialColor = "white";
  return (
    <div className="w-60 text-[6px] p-4 ">
      <div className="relative">
        <div className="relative">
          <img className="w-full" src={Recipe}></img>
        </div>
        <div className="absolute bottom-0.5 right-1">
          <StarOutlinedIcon
            onClick={() => {
              initialColor === starColor
                ? setStarColor("#F9C22F")
                : setStarColor("white");
            }}
            style={{
              color: starColor,
              width: "12px",
              height: "16px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <div className="mt-2 font-semibold">
        Sushi saumon, california and maki
      </div>
      <div className="flex items-center text-[#666666]">
        <AccessTimeIcon
          style={{ color: "#666666", width: "12px", height: "16px" }}
        />
        <div className="ml-1">15 min</div>
      </div>
    </div>
  );
};

export default RecipeComponent;
