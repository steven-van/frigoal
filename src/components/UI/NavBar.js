import logo from "../../assets/imgs/svg/logo-with-text.svg";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

const Button = (url, title) => {
  return (
    <a
      href={url}
      class="inline-block text-lg px-5 py-2 leading-none rounded-full text-black hover:border-transparent hover:text-white hover:bg-[#65C9FF] active:border-transparent active:text-white active:bg-[#65C9FF] mt-4 lg:mt-0"
    >
      {title}
    </a>
  );
};

const NavBar = () => {
  var isLoggedIn = true;

  const navigate = useNavigate();

  const LogoOnClick = () => {
    navigate("/");
  };

  return (
    <nav class="flex items-center justify-between flex-wrap bg-[#FFFFFF] p-10">
      <div className="w-full flex relative justify-center items-center">
        <div className="absolute left-0">
          <div class="w-44" onClick={() => LogoOnClick()}>
            <img src={logo} alt="Frigoal Logo"></img>
          </div>
        </div>
        <div class="flex justify-center gap-4 text-sm lg:flex-grow">
          {Button("/", "Home")}
          {Button("#Fridges", "Fridges")}
          {Button("#Recipes", "Recipes")}
        </div>
        <div className="flex flex-row justify-center items-center absolute right-0">
          {isLoggedIn ? (
            <div className="mr-8 mb-1 flex justify-center items-center">
              <Dropdown />
            </div>
          ) : (
            <div className="mr-8 mb-1 flex justify-center items-center rounded-lg ">
              <div class="flex justify-center gap-4 text-sm lg:flex-grow">
                <a
                  href="/Login"
                  class="inline-block text-lg px-5 py-2 leading-none rounded-full text-white bg-[#6097CE] hover:bg-[#6097CE]/[.75] mt-4 lg:mt-0"
                >
                  Log In
                </a>
                <a
                  href="/SignUp"
                  class="inline-block text-lg px-5 py-2 leading-none rounded-full text-white bg-[#65C9FF] hover:bg-[#65C9FF]/[.75] mt-4 lg:mt-0"
                >
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
