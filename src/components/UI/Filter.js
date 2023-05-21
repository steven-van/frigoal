import cutlery from "../../assets/images/svg/filter_icons/cutlery.svg"
import vegan from "../../assets/images/svg/filter_icons/vegan.svg"
import burger from "../../assets/images/svg/filter_icons/food_burger.svg"
import pizza from "../../assets/images/svg/filter_icons/pizza.svg"
import sushi from "../../assets/images/svg/filter_icons/sushi.svg"
import rice from "../../assets/images/svg/filter_icons/rice.svg"
import taco from "../../assets/images/svg/filter_icons/taco.svg"
import thai from "../../assets/images/svg/filter_icons/thai.svg"
import baguette from "../../assets/images/svg/filter_icons/baguette.svg"
import desert from "../../assets/images/svg/filter_icons/desert.svg"
import curry from "../../assets/images/svg/filter_icons/curry.svg"

const Filter = () => {

  return (
    <div className="flex space-x-6 mx-10 my-10">
      
      <button className="flex-1 rounded-[15px] bg-[#f8f8f8] border border-gray-300 hover:bg-[#ace0fb]">
        <img className="w-16 mx-auto my-5" src={cutlery}></img>
        <p className="mb-5">All</p>
      </button>

      <button className="flex-1 rounded-[15px] bg-[#f8f8f8] border border-gray-300 hover:bg-[#ace0fb]">
        <img className="w-12 mx-auto my-5" src={vegan}></img>
        <p className="mb-5">Vegan</p>
      </button>

      <button className="flex-1 rounded-[15px] bg-[#f8f8f8] border border-gray-300 hover:bg-[#ace0fb]">
        <img className="w-16 mx-auto my-5" src={burger}></img>
        <p className="mb-5">American</p>
      </button>

      <button className="flex-1 rounded-[15px] bg-[#f8f8f8] border border-gray-300 hover:bg-[#ace0fb]">
        <img className="w-16 mx-auto my-5" src={pizza}></img>
        <p className="mb-5">Italian</p>
      </button>

      <button className="flex-1 rounded-[15px] bg-[#f8f8f8] border border-gray-300 hover:bg-[#ace0fb]">
        <img className="w-16 mx-auto my-5" src={sushi}></img>
        <p className="mb-5">Japanese</p>
      </button>

      <button className="flex-1 rounded-[15px] bg-[#f8f8f8] border border-gray-300 hover:bg-[#ace0fb]">
        <img className="w-16 mx-auto my-5" src={rice}></img>
        <p className="mb-5">Chinese</p>
      </button>

      <button className="flex-1 rounded-[15px] bg-[#f8f8f8] border border-gray-300 hover:bg-[#ace0fb]">
        <img className="w-16 mx-auto my-5" src={taco}></img>
        <p className="mb-5">Mexican</p>
      </button>

      <button className="flex-1 rounded-[15px] bg-[#f8f8f8] border border-gray-300 hover:bg-[#ace0fb]">
        <img className="w-[67px] mx-auto my-5" src={thai}></img>
        <p className="mb-5">Thai</p>
      </button>

      <button className="flex-1 rounded-[15px] bg-[#f8f8f8] border border-gray-300 hover:bg-[#ace0fb]">
        <img className="w-16 mx-auto my-5" src={curry}></img>
        <p className="mb-5">Indian</p>
      </button>

      <button className="flex-1 rounded-[15px] bg-[#f8f8f8] border border-gray-300 hover:bg-[#ace0fb]">
        <img className="w-16 mx-auto my-5" src={baguette}></img>
        <p className="mb-5">French</p>
      </button>

      <button className="flex-1 rounded-[15px] bg-[#f8f8f8] border border-gray-300 hover:bg-[#ace0fb]">
        <img className="w-16 mx-auto my-5" src={desert}></img>
        <p className="mb-5">Deserts</p>
      </button>

    </div>
  );
};

export default Filter;
