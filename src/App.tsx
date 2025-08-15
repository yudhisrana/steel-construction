import AboutUs from "./components/aboutUs";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Price from "./components/price";
import Service from "./components/service";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Service />
      <Price />
    </>
  );
};

export default App;
