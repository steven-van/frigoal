import logo from "../../assets/imgs/svg/logo-with-text.svg";
import Dropdown from "./Dropdown";

const NavBar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-[#FFFFFF] p-10">
      <div className="w-full flex relative justify-center items-center">
        <div className="absolute left-0">
          <div class="w-44">
            <img src={logo} alt="Frigoal Logo"></img>
          </div>
        </div>
        <div class="flex justify-center gap-4 text-sm lg:flex-grow">
          <a
            href="#home"
            class="inline-block text-lg px-5 py-2 leading-none rounded-full text-black hover:border-transparent hover:text-white hover:bg-[#65C9FF] active:border-transparent active:text-white active:bg-[#65C9FF] mt-4 lg:mt-0"
          >
            Home
          </a>
          <a
            href="#fridges"
            class="inline-block text-lg px-5 py-2 leading-none rounded-full text-black hover:border-transparent hover:text-white hover:bg-[#65C9FF] active:border-transparent active:text-white active:bg-[#65C9FF] mt-4 lg:mt-0"
          >
            Fridges
          </a>
          <a
            href="#recipes"
            class="inline-block text-lg px-5 py-2 leading-none rounded-full text-black hover:border-transparent hover:text-white hover:bg-[#65C9FF] active:border-transparent active:text-white active:bg-[#65C9FF] mt-4 lg:mt-0"
          >
            Recipes
          </a>
        </div>
        <div className="absolute right-0">
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
