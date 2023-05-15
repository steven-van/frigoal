import frigoal from "./../../assets/images/svg/frigoal_lady.svg"
import React from 'react';

const SectionFrigoal = () => {
    const font = "font-montserrat";

    const goToSingUp = () => {
        window.location.href = '/SignUp';
      };

    return (
        <div className={`${font} flex flex-wrap justify-center items-center mr-20`}>
            <div className="flex-1 md:w-1/2 lg:w-1/2 xl:w-1/2 ml-4 md:ml-[70px]">
                <p className="font-sans font-bold text-3xl md:text-5xl lg:text-8xl text-left">
                    <span className="text-[#65c9ff]">FRI</span><span className="text-[#6097CE]">GOAL</span>
                </p>
                
                <p className={'font-thin text-lg md:text-xl lg:text-3xl text-left md:mt-7 ${font}'} style={{lineHeight:'1.3'}}>
                    The ultimate defense against food waste and lack of culinary inspiration!
                </p>
                <button onClick={goToSingUp} className="float-left rounded-full text-white hover:bg-[#6097CE] bg-[#65c9ff] px-5 py-2 md:py-1 mt-7 md:mt-7 ">Sign Up</button>
                
            </div>

            <div className="flex-1 -mr-16 md:w-1/2 lg:w-1/2 xl:w-1/2">
                <img className="mx-auto py-10 md:py-20 max-w-full" src={frigoal} alt="Frigoal" width="450" height="450" />
            </div>
        </div>
    );
};


export default SectionFrigoal;