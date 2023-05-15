import chef from "./../../assets/images/svg/chef.svg"


const SectionExplication = () => {
    // Définir la variable de police
    const font = "font-montserrat font-thin";

    return (
        <div className="relative">
            <div className="absolute skew-y-[356deg] bg-[#E1F2FF] w-full h-4/6 justify-center items-center mt-28 z-0">
            </div>
            <div className="flex flex-wrap justify-center items-center mr-20">
                <div className="flex-1 md:w-1/2 lg:w-1/2 xl:w-1/2 z-10">
                    <img className="mt-14 py-10 md:py-20 lg:mt-2 lg:ml-20 max-w-full"
                        src={chef}
                        width="450"
                        height="450"
                        alt="Chef Icon"
                    />
                </div>
                <div className={`flex-1 md:w-1/2 lg:w-1/2 xl:w-1/2 z-10 ${font}`}>
                    <p className="font-thin text-[12px] mt-28 sm:text-[15px] md:text-xl md:mt-1 lg:text-2xl lg:mt-5 " style={{ lineHeight: '1.8' }}>
                        Our project aims to create a virtual fridge platform to simplify food management, recipe sharing, and grocery planning, promoting diverse and balanced eating within an apartment or family setting.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default SectionExplication;