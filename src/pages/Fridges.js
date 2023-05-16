import Recipe from "../assets/images/svg/recipe.svg";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const Fridges = () => {
  return (
    <div>
      Fridges Page
      <div className="w-40 h-24 text-[6px] p-4">
        <div className="relative">
          <div className="relative">
            <img className="w-full" src={Recipe}></img>
          </div>
          <div className="absolute right-0 bottom-0">
            <StarOutlinedIcon style={{ color: "white", width: "10px" }} />
          </div>
        </div>
        <div>Sushi saumon, california and maki</div>
      </div>
    </div>
  );
};

export default Fridges;
