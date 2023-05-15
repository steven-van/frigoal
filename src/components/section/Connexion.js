import bonhomme from "../../assets/imgs/svg/bonhomme.svg";

const Connexion = () =>{

const cercle1 = {
  position: "relative",
  width: '15vw',
  height: "15vw",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.5)", 
}
const cercle2 = {
  position: "relative",
  width: "15vw",
  height: "15vw",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.5)", 
}
const cercle3 = {
  position: "relative",
  width: "6vw",
  height: "6vw",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.5)", 
}

const font = "font-montserrat";

return (
  <div class="container mx-auto px-20">
    <div class="box-border border-1 shadow-2xl">
      <div class="flex min-h-0">
        <div className="flex-1">
        <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className={`mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 ${font}`}>
                    Log In
                  </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium leading-6 text-gray-900 ${font}`}>
                        Email adress
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className={`block text-sm font-medium leading-6 text-gray-900 ${font}`}>
                          Your password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                    <br></br><br></br><br></br>
                      <button
                        type="submit"
                        className={`flex w-full justify-center rounded-md bg-[#6097CE] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#65C9FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${font}`}
                      >
                        Log In
                      </button>
                    </div>
                    <p class={`mt-10 text-center text-sm text-gray-500 ${font}`}>
                      Don't have an account? 
                      <a href="#" class={`font-semibold leading-6 text-[#6097CE] hover:text-[#65C9FF] ${font}`}>Sign Up</a>
                    </p>
                  </form>
                </div>
              </div>
        </div>
        </div>

        <div className="flex-1 bg-[#65C9FF] relative">

          <div className="z-5 absolute">

              <div className="bg-stone-400 rounded-s-3xl left-10 top-28 sm:left-10 sm:top-20 md:left-12 md:top-20 lg:left-20 lg:top-16" style ={cercle1}></div>

              <div className="bg-stone-400 rounded-s-3xl left-16 top-20 sm:left-[80px] sm:top-[50px] md:left-28 md:top-8 lg:left-48 lg:top-0" style ={cercle2}></div>
              
              <div className="bg-stone-400 rounded-s-3xl left-32 top-[330px] shadow-2xl sm:left-[180px] sm:top-[200px] md:left-56 md:top-32 lg:left-[27vw] lg:top-2" style ={cercle3}></div>

          </div>

          <div class="flex z-10 absolute">
            <div className={`flex-1 font-bold text-[20px] text-slate-50 ml-6 mt-[450px] lg:text-[35px] lg:mt-[360px] lg:ml-[50px] ${font}`}>
              Hey<br></br>Welcome<br></br>Back!
            </div>

            <img className="flex-1 justify-center items-center -mb-[150px] w-[8vw] lg:ml-36" src={bonhomme} />

          </div>

        </div>

      </div>          
    </div>
  </div>
);


};
export default Connexion;