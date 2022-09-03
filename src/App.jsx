import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Navber from "./components/Navber";

const App = () => {
  return (
    <div>
      <div className="lg:ml-40 lg:mr-40">
        <Logo />
        <Navber true={true} />

        <Footer />
      </div>
    </div>
  );
};

export default App;
