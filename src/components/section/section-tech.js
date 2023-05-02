import tech from "./../../assets/imgs/svg/tech_bg.svg"
import logos from "./../../assets/imgs/svg/logos.svg"

import React from 'react';

const SectionTech = () => {

    return (

            <div className="bg-[#65c9ff2a] justify-center items-center m-20 relative">

                <div className="absolute w-72 h-72 rounded-full bg-[#65c9ff58]  top-60 left-14 z-0"></div>
                <div className="absolute w-36 h-36 rounded-full bg-[#65c9ff58]  top-10 left-72 z-0"></div>
                <div className="absolute w-96 h-96 rounded-full bg-[#65c9ff58]  top-14 right-14 z-0"></div>
                <div className="absolute w-40 h-40 rounded-full bg-[#65c9ff58]  top-96 right-1/3 z-0"></div>


                <div className="flex flex-row top-20 px-8 py-32 my-36">
                    <div className="flex-1 md:w-1/2 lg:w-1/2 xl:w-1/2 md:ml-40 z-10">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl text-left text-black text-bold">Build with the latest web technologies</h1>

                            <p className="text-xl md:text-xl lg:text-2xl text-left text-black pt-10">
                                The website has been coded using the latest technologies available in the market (React, NodeJS, HTML/CSS and MySQL). Our aim is to provide you with an optimal experience with a sleek design and extraordinary animations.
                            </p>
                    </div>
                    <div className="flex-1 md:w-1/2 lg:w-1/2 xl:w-1/2 ml-4 md:ml-40 justify-center items-center pt-10 mr-20 z-10">
                            <img className="justify-center items-center" src={logos} alt="Logos" width="450" height="450" />
                    </div>
                </div>
            </div>

    );
};
  
export default SectionTech;