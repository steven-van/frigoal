import NavBar from "../components/UI/NavBar";
import FridgeCard from "../components/UI/Fridge-card";
import Footer from "../components/UI/Footer";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";

const Fridges = () => {
  const colors = ["bg-sky-200", "bg-sky-100", "bg-blue-200", "bg-indigo-200"];
  const [fridges, setFridges] = useState([]);
  const { email } = useContext(AuthContext);

  function fetchFridges(userId) {
    fetch(`http://localhost:3001/fridge/getFridgeByUser/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFridges(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des recettes :",
          error
        );
      });
  }

  useEffect(() => {
    fetchFridges();
  }, []);

  return (
    <div>
      <NavBar />
      <br /> <br />
      <br /> <br />
      <br /> <br />
      {fridges.length ? (
        <div class="flex  justify-center items-center bg-[#F9FBFC]">
          <div className="grid grid-cols-3" id="recipe">
            {fridges.map((fridge, i) => (
              <FridgeCard
                id={fridge.id}
                name={fridge.name}
                color={colors[i % colors.length]}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid md:w-full lg:w-full place-items-center pt-8 h-screen">
          Pas de résultats
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Fridges;
