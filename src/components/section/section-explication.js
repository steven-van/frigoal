import chef from "./../../assets/imgs/svg/chef.svg"

const SectionExplication = () => {
    return (

        <div className="relative">

            <div className="absolute skew-y-[356deg] bg-[#E1F2FF] w-screen h-4/6 justify-center items-center mt-28 z-0">
                
            </div>

            <div className="flex flex-wrap justify-center items-center mr-20">

                <div className="flex-1 md:w-1/2 lg:w-1/2 xl:w-1/2 z-10">
                    <img className="mx-auto py-10 md:py-20 max-w-full" src={chef}width="450" height="450" />
                </div>

                <div className="flex-1 md:w-1/2 lg:w-1/2 xl:w-1/2 z-10">
                    <p className="text-lg md:text-xl lg:text-3xl text-left">
                        Our project aims to create a virtual fridge platform to simplify food management, recipe sharing, and grocery planning, promoting diverse and balanced eating within an apartment or family setting. 
                    </p>
                </div>

            </div>

        </div>
        
    );
};
  

export default SectionExplication;