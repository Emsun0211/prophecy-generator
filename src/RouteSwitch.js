import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Navbar";
import Home from "./pages/Home/home";

const RouteSwitch = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RouteSwitch;
