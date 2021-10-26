import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import HireMe from "./Components/HireMe";
import MyPortfolio from "./Components/MyPortfolio";
import Resume from "./Components/Resume";
import Services from "./Components/Services";
function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Services></Services>
      <Resume></Resume>
      <HireMe></HireMe>
      <MyPortfolio></MyPortfolio>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}

export default App;
