import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import AboutMe from "./components/AboutMe/aboutMe";
import Internships from "./components/Internships/internships";
import MiniProject from "./components/MiniProject/miniProject";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro /><br />
      <AboutMe /><br />
      <Skills /><br />
      <Internships /><br />
      <MiniProject /><br />
      <Contact /><br />
      <Footer />
    </div>
  );
}

export default App;
