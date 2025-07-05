import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
// import Experience from "./components/Experience/experience";
import { Helmet } from "react-helmet";


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Muhamad Barhan | Full Stack Developer Portfolio</title>
        <meta name="description" content="Explore Muhamad Barhan's projects, skills, and experience as a full stack developer." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-portfolio.vercel.app/" />
      </Helmet>
      <Navbar/>
      <Intro/>
      <About/>
      {/* <Experience/> */}
      <Skills/>
      <Projects/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;