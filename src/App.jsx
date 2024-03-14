import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1002.34px] bg-white">
        <Navigation />
        <Home />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default App;
