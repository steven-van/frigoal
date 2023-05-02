import Nathalie from "./../../assets/imgs/svg/nathalie.svg"
import Mohamad from "./../../assets/imgs/svg/mohamad.svg"
import Steven from "./../../assets/imgs/svg/steven.svg"
import Christine from "./../../assets/imgs/svg/christine.svg"
import Maxime from "./../../assets/imgs/svg/maxime.svg"
import Fandresena from "./../../assets/imgs/svg/fandresena.svg"


const SectionTeam = () => {
    const font = "font-montserrat font-thin";

    return (
      <div className={`${font} font-thin flex justify-center items-center h-screen flex-col mb-60`}>
        {/* Affichage du titre de la section */}
        <div>
            <p className="text-3xl md:text-4xl lg:text-6xl text-center text-black font-bold pb-10 md:mt-9">
                Our Team
            </p>
            <p className="text-1xl md:text-2xl lg:text-4xl text-center text-black">
                LSI2 APP 2022-2023
            </p>
        </div>
  
        {/* Affichage des deux colonnes des membre */}
        <div className="flex">
  
          {/* Affichage de la premiere colonne */}
            <div className="w-1/2 p-10">
                <div className="flex flex-col">

                    {/* Nathalie LIU */}
                    <div className="flex justify-center items-center">
                        <div className="w-1/2 p-5 pt-12">
                            <p className="text-1xl md:text-2xl lg:text-3xl text-black">Nathalie LIU</p>
                            <p className="text-1xl md:text-1xl lg:text-2xl text-[#6097CE]">
                                Software Engineer
                            </p>
                        </div>
                        <div className="w-1/2 p-5 flex justify-center">
                            <img src={Nathalie}
                        width="150" height="150"/>
                        </div>
                    </div>

                    {/* Mohamad RESLAN */}
                    <div className="flex justify-center items-center">
                        <div className="w-1/2 p-5 pt-12">
                            <p className="text-1xl md:text-2xl lg:text-3xl text-black">Mohamad RESLAN</p>
                            <p className="text-1xl md:text-1xl lg:text-2xl text-[#6097CE]">
                                Software Engineer
                            </p>
                        </div>
                        <div className="w-1/2 p-5 flex justify-center">
                            <img src={Mohamad}
                        width="150" height="150"/>
                        </div>
                    </div>

                    {/* Steven VAN */}
                    <div className="flex justify-center items-center">
                        <div className="w-1/2 p-5 pt-12">
                            <p className="text-1xl md:text-2xl lg:text-3xl text-black">Steven VAN</p>
                            <p className="text-1xl md:text-1xl lg:text-2xl text-[#6097CE]">
                                Software Engineer
                            </p>
                        </div>
                        <div className="w-1/2 p-5 flex justify-center">
                            <img src={Steven}
                        width="150" height="150"/>
                        </div>
                    </div>
                    
                </div>
            </div>
  
            <div className="w-1/2 p-10">
                <div className="flex flex-col">

                {/* Christine LI */}
                    <div className="flex justify-center items-center">
                        <div className="w-1/2 p-5 flex justify-center">
                            <img src={Christine} width="150" height="150"/>
                        </div>
                        <div className="w-1/2 p-5 pt-12">
                            <p className="text-1xl md:text-2xl lg:text-3xl text-black">Christine LI</p>
                            <p className="text-1xl md:text-1xl lg:text-2xl text-[#6097CE]">
                                Software Engineer
                            </p>
                        </div>
                    </div>
                    
                    {/* Fandresena RAKOTOMAHEFA */}
                    <div className="flex justify-center items-center">
                        <div className="w-1/2 p-5 flex justify-center">
                            <img src={Fandresena} width="150" height="150"/>
                        </div>
                        <div className="w-1/2 p-5 pt-12">
                            <p className="text-1xl md:text-2xl lg:text-3xl text-black">Fandresena RAKOTOMAHEFA</p>
                            <p className="text-1xl md:text-1xl lg:text-2xl text-[#6097CE]">
                                Software Engineer
                            </p>
                        </div>
                    </div>

                    {/* Maxime WANG */}
                    <div className="flex justify-center items-center">
                        <div className="w-1/2 p-5 flex justify-center">
                            <img src={Maxime} width="150" height="150"/>
                        </div>
                        <div className="w-1/2 p-5 pt-12">
                            <p className="text-1xl md:text-2xl lg:text-3xl text-black">Maxime WANG</p>
                            <p className="text-1xl md:text-1xl lg:text-2xl text-[#6097CE]">
                                Software Engineer
                            </p>
                        </div>
                    </div>

                </div>
          </div>
        </div>
      </div>
    );
};

export default SectionTeam;