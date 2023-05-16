
import SectionFrigoal from "./../components/section/section-frigoal"
import SectionTech from "./../components/section/section-tech"
import SectionTeam from "./../components/section/section-team"
import SectionExplication from "../components/section/section-explication";
import Footer from "../components/UI/Footer";
import NavBar from "../components/UI/NavBar";


const Home = () => {
  return (
    <div>
    <NavBar />
    <br></br>
    <br></br>
    <br></br>
    <SectionFrigoal />
    <SectionExplication />
    <SectionTech />
    <SectionTeam />
    <Footer></Footer>
  </div>
  );
};

export default Home;
