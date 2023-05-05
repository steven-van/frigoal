import { Outlet, Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import logo from "../../assets/imgs/svg/logo-with-text.svg";

const NavBar = () => {
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-[#FFFFFF] p-10">
        <div className="w-full flex relative justify-center items-center">
          <div className="absolute left-0">
            <div class="w-44">
              <img src={logo} alt="Frigoal Logo"></img>
            </div>
          </div>
          <div class="flex justify-center gap-4 text-sm lg:flex-grow">
            {/* <Link
                to="/"
                class="inline-block text-lg px-5 py-2 leading-none rounded-full text-black hover:border-transparent hover:text-white hover:bg-[#65C9FF] active:border-transparent active:text-white active:bg-[#65C9FF] mt-4 lg:mt-0"
              >
                Home
              </Link> */}
            {/* <Link
              to="/fridge"
              class="inline-block text-lg px-5 py-2 leading-none rounded-full text-black hover:border-transparent hover:text-white hover:bg-[#65C9FF] active:border-transparent active:text-white active:bg-[#65C9FF] mt-4 lg:mt-0"
            >
              Fridges
            </Link>
            <Link
              to="/recipe"
              class="inline-block text-lg px-5 py-2 leading-none rounded-full text-black hover:border-transparent hover:text-white hover:bg-[#65C9FF] active:border-transparent active:text-white active:bg-[#65C9FF] mt-4 lg:mt-0"
            >
              Recipes
            </Link> */}
          </div>
          <div className="absolute right-0">
            <Dropdown />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;


// <>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/login">
//                             Login
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/signUp">
//                             Sign Up
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/profile">
//                             Profile
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/recipe">
//                             Recipe
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/fridge">
//                             Fridge
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>

//             <Outlet />
//         </>