import Recipe from "../../assets/images/png/sushi.jpeg";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
const RecipeComponent = (props) => {
  const [starColor, setStarColor] = useState("white");
  const initialColor = "white";

  return (
    <div className="text-[24px] mx-10 my-10">
      <div className="w-[415px] h-[396px] relative">
        <img
          className="w-[415px] h-[366px] rounded-md"
          src={Recipe}
          alt="recipe"
        />
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
                width: "12px",
                height: "12px",
                cursor: "pointer",
              }}
            />
          </Tooltip>
        </div>
      </div>
      <div className="mt-2 font-bold">{props.title}</div>
      <div className="flex items-center text-[#666666]">
        <AccessTimeIcon
          style={{ color: "#666666", width: "22px", height: "26px" }}
        />
        <div className="ml-1">{props.duration} min</div>
      </div>
    </div>
  );
};

export default RecipeComponent;
