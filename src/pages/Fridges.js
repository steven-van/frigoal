import NavBar from "../components/UI/NavBar";
import FridgeCard from "../components/UI/Fridge-card";

const Fridges = () => {
  const fridges = [
    { id: 1, name: "fridge1" },
    { id: 2, name: "fridge2" },
    { id: 3, name: "fridge3" },
  ];

  return (
    <div class="bg-[#F9FBFC] h-screen">
      <NavBar />
      <div class="flex justify-center ">
        {fridges.map((fridge) => (
          <FridgeCard id={fridge.id} name={fridge.name} />
        ))}
      </div>
    </div>
  );
};

export default Fridges;
