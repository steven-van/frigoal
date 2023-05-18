import Recipe from "../../assets/images/png/sushi.jpeg";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
const RecipeComponent = (props) => {
  const [starColor, setStarColor] = useState("white");
  const initialColor = "white";

  return (
    <div className="w-60 text-[6px] p-4 ">
      <div className="relative">
        <div className="relative">
          <img className="w-full" src={Recipe} alt="recipe" />
          <div className="absolute bottom-0.5 right-1">
            <Tooltip title="Ajouter aux favoris">
              <StarOutlinedIcon
                onClick={() => {
                  initialColor === starColor
                    ? setStarColor("#F9C22F")
                    : setStarColor("white");
                }}
                style={{
                  color: starColor,
                  width: "20px",
                  height: "24px",
                  cursor: "pointer",
                }}
              />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="mt-2 font-semibold">{props.title}</div>
      <div className="flex items-center text-[#666666]">
        <AccessTimeIcon
          style={{ color: "#666666", width: "12px", height: "16px" }}
        />
        <div className="ml-1">{props.duration} min</div>
      </div>
    </div>
  );
};

export default RecipeComponent;
