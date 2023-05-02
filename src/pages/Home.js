import SectionFrigoal from "./../components/section/section-frigoal"
import SectionTech from "./../components/section/section-tech"
import SectionTeam from "./../components/section/section-team"
import SectionExplication from "../components/section/section-explication";

const Home = () => {
  return <div>
    <SectionFrigoal></SectionFrigoal>
    <SectionExplication></SectionExplication>
    <SectionTech></SectionTech>
    <SectionTeam></SectionTeam>
  </div>;
};

export default Home;
