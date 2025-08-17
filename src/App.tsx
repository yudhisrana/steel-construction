import AboutUs from "./components/aboutUs";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Price from "./components/price";
import Service from "./components/service";
import Testimony from "./components/testimony";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Service />
      <Price />
      <Portfolio />
      <Testimony />
      <Contact />
    </>
  );
};

export default App;
