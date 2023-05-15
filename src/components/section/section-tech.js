import logos from "./../../assets/images/svg/logos.svg"

import React from 'react';

const SectionTech = () => {
    const font = "font-montserrat font-thin";

    return (
        <div className="bg-[#65c9ff2a] justify-center items-center mx-4 md:mx-12 relative my-64">
            <div className="absolute w-28 h-28 md:w-36 md:h-36 lg:w-72 lg:h-72 rounded-full bg-[#65c9ff58] top-24 md:top-60 left-6 md:left-14 lg:left-28 z-0"></div>
            <div className="absolute w-12 h-12 md:w-24 md:h-24 lg:w-36 lg:h-36 rounded-full bg-[#65c9ff58] top-6 md:top-10 left-28 md:left-72 lg:left-96 z-0"></div>
            <div className="absolute w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full bg-[#65c9ff58] top-8 md:top-14 right-8 md:right-14 lg:right-22 z-0"></div>
            <div className="absolute w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-[#65c9ff58] top-72 md:top-96 right-1/3 lg:right-30 z-0"></div>

            <div className={`${font} flex flex-col md:flex-row top-20 px-4 md:px-8 py-12 md:py-32 my-8 md:my-36`}>
                <div className="md:flex-1 md:ml-40 lg:w-1/2 xl:w-1/2 z-10">
                    <h1 className="text-xl md:text-4xl lg:text-5xl text-left text-black font-bold">
                        Build with the latest web technologies
                    </h1>
                    <p className="text-base md:text-xl lg:text-2xl text-left text-black pt-6 md:pt-10">
                        The website has been coded using the latest technologies available in the market (React, NodeJS, HTML/CSS and
                        MySQL). Our aim is to provide you with an optimal experience with a sleek design and extraordinary animations.
                    </p>
                </div>
                <div className="md:flex-1 md:w-1/2 ml-4 md:ml-8 lg:w-1/2 xl:w-1/2 justify-center items-center pt-4 md:pt-6 z-10">
                    <img
                        className="mx-auto mt-10 lg:ml-20 lg:float-left"
                        src={logos}
                        alt="Logos"
                        width="400"
                        height="400"
                    />
                </div>
            </div>
        </div>
    );
};


export default SectionTech;