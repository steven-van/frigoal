import NavBar from "../components/UI/NavBar";
import FridgeCard from "../components/UI/Fridge-card";

const Fridges = () => {
  const colors = ["bg-sky-200", "bg-sky-100", "bg-blue-200", "bg-indigo-200"];
  const fridges = [
    { id: 1, name: "Frigo familiale" },
    { id: 2, name: "Frigo chez mamie !!!!!!!!" },
    { id: 3, name: "Appart Villejuif" },
  ];

  return (
    <div>
      <NavBar />
      <div class="flex h-screen justify-center items-center bg-[#F9FBFC]">
        <div class="flex justify-center">
          {fridges.map((fridge, i) => (
            <FridgeCard
              id={fridge.id}
              name={fridge.name}
              color={colors[i % colors.length]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fridges;
