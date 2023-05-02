import Connexion from "../components/section/Connexion";
import bonhomme from "../assets/imgs/svg/bonhomme.svg";
import key from "../assets/imgs/svg/key.svg";
const Login = () => {

  const cercle1 = {
    position: "relative",
    zIndex: "1", /* le cercle 1 est en avant-plan */
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)", 
  }
  const cercle2 = {
    position: "relative",
    zIndex: "2", /* le cercle 1 est en avant-plan */
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)", 
  }
  const cercle3 = {
    position: "relative",
    width: "125px",
    height: "125px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)", 
  }

  return (
  
    <div class="container mx-auto px-20">
        <div class="box-border border-1 shadow-2xl">
          <div class="min-h-0 flex">
            <div className="flex-1"><Connexion />
            </div>
            <div className="flex-1 relative bg-[#65C9FF] z-0">
              <div className="bg-stone-400 rounded-s-3xl inset-x-20 inset-y-14 z-5" style ={cercle1}></div>
              <div className="bg-stone-400 rounded-s-3xl inset-x-40 inset-y-1 z-5" style ={cercle2}></div>
              <div className="bg-stone-400 rounded-s-3xl inset-x-3/4 inset-y-10 shadow-2xl z-5" style ={cercle3}></div>
              <div class="flex">
                <div className="flex-1 font-bold text-[40px] text-slate-50 text-start pl-8">
                  Hey<br></br>Welcome<br></br>Back!
                </div>
                <div className="flex-1 z-10">
                  <img className="mx-auto w-12 justify-center items-center" src={bonhomme} />
                </div>
              </div>

            </div>
          </div>          
        </div>
    </div>

  )

};

export default Login;
