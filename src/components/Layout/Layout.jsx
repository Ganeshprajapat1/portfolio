import Navbar from "../Navbar/Navbar.jsx";
import Home from "../../pages/Home/Home.jsx";
// import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;