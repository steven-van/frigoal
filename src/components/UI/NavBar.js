import logo from "../../assets/imgs/png/logo-with-text.png";

const NavBar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-[#fafaf9] p-10">
      <div className="w-full flex relative justify-center items-center">
        <div className="absolute left-0">
          <div class="w-44">
            <img src={logo} alt="Frigoal Logo"></img>
          </div>
        </div>
        <div class="flex justify-center gap-4 text-sm lg:flex-grow">
          <a
            href="#home"
            class="inline-block text-lg px-5 py-2 leading-none border-2 rounded-full text-black border-[#0BA95D] hover:border-transparent hover:text-white hover:bg-[#0BA95D] mt-4 lg:mt-0"
          >
            Home
          </a>
          <a
            href="#fridges"
            class="inline-block text-lg px-5 py-2 leading-none border-2 rounded-full text-black border-[#0BA95D] hover:border-transparent hover:text-white hover:bg-[#0BA95D] mt-4 lg:mt-0"
          >
            Fridges
          </a>
          <a
            href="#recipes"
            class="inline-block text-lg px-5 py-2 leading-none border-2 rounded-full text-black border-[#0BA95D] hover:border-transparent hover:text-white hover:bg-[#0BA95D] mt-4 lg:mt-0"
          >
            Recipes
          </a>
        </div>
        <div className="absolute right-0">
          <a
            href="#responsive-header"
            class="inline-block text-lg px-5 py-2 leading-none border-2 rounded-full text-black border-[#0BA95D] hover:border-transparent hover:text-white hover:bg-[#0BA95D] mt-4 lg:mt-0"
          >
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
